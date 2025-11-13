import type { APIRoute } from 'astro';
import { makeC1Response } from '@thesysai/genui-sdk/server';

const THESYS_API_KEY = import.meta.env.THESYS_API_KEY || import.meta.env.PUBLIC_THESYS_API_KEY;
const THESYS_API_URL = 'https://api.thesys.dev/v1/embed/chat/completions';

export const POST: APIRoute = async ({ request }) => {
  console.log('C1 API endpoint called');

  try {
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));

    const { messages, threadId } = body;

    if (!THESYS_API_KEY) {
      console.error('THESYS_API_KEY is not set');
      throw new Error('API key not configured');
    }

    console.log('Creating C1 response handler');
    const c1Response = makeC1Response();

    console.log('Calling Thesys API:', THESYS_API_URL);

    // Forward the request to Thesys API
    const response = await fetch(THESYS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${THESYS_API_KEY}`,
      },
      body: JSON.stringify({
        messages,
        stream: true,
        model: 'c1/anthropic/claude-sonnet-4/v-20250930',
      }),
    });

    console.log('Thesys API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Thesys API error:', response.status, errorText);
      throw new Error(`Thesys API error: ${response.status} ${errorText}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (reader) {
      // Stream the response in background
      (async () => {
        try {
          let buffer = '';

          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              console.log('Stream done');
              await c1Response.end();
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Keep incomplete line in buffer

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine) continue;

              if (trimmedLine.startsWith('data: ')) {
                const data = trimmedLine.slice(6);

                if (data === '[DONE]') {
                  console.log('Received [DONE]');
                  await c1Response.end();
                  break;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;

                  if (content) {
                    console.log('Writing content chunk:', content.substring(0, 50));
                    await c1Response.writeContent(content);
                  }
                } catch (e) {
                  console.error('Error parsing chunk:', data, e);
                }
              }
            }
          }
        } catch (error) {
          console.error('Streaming error:', error);
          await c1Response.end();
        }
      })();
    } else {
      console.error('No reader available from response');
      await c1Response.end();
    }

    console.log('Returning response stream');

    // Return the response stream
    return new Response(c1Response.responseStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('C1 API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
