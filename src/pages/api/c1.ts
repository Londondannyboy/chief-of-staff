import type { APIRoute } from 'astro';

const THESYS_API_KEY = import.meta.env.THESYS_API_KEY || import.meta.env.PUBLIC_THESYS_API_KEY;
const THESYS_API_URL = 'https://api.thesys.dev/v1/embed/chat/completions';

export const POST: APIRoute = async ({ request }) => {
  console.log('C1 API endpoint called');

  try {
    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));

    const { messages } = body;

    if (!THESYS_API_KEY) {
      console.error('THESYS_API_KEY is not set');
      throw new Error('API key not configured');
    }

    console.log('Calling Thesys API:', THESYS_API_URL);

    // Forward the request to Thesys API - pass through the response directly
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

    console.log('Returning Thesys response stream directly');

    // Return the Thesys API response stream directly - it's already in the right format
    return new Response(response.body, {
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
