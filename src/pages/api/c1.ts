import type { APIRoute } from 'astro';
import { makeC1Response } from '@thesysai/genui-sdk/server';

const THESYS_API_KEY = import.meta.env.THESYS_API_KEY || import.meta.env.PUBLIC_THESYS_API_KEY;
const THESYS_API_URL = 'https://api.thesys.dev/v1/chat/completions';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { messages, threadId } = await request.json();

    // Create a C1 response handler
    const c1Response = makeC1Response();

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
        model: 'thesys-c1', // Default model, adjust as needed
      }),
    });

    if (!response.ok) {
      throw new Error(`Thesys API error: ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (reader) {
      // Stream the response
      (async () => {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n').filter(line => line.trim() !== '');

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') {
                  await c1Response.end();
                  break;
                }

                try {
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;
                  if (content) {
                    await c1Response.writeContent(content);
                  }
                } catch (e) {
                  console.error('Error parsing chunk:', e);
                }
              }
            }
          }
        } catch (error) {
          console.error('Streaming error:', error);
          await c1Response.end();
        }
      })();
    }

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
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
