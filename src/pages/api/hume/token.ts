import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.HUME_API_KEY;
  const secretKey = import.meta.env.HUME_SECRET_KEY;

  if (!apiKey || !secretKey) {
    return new Response(JSON.stringify({ error: 'Missing Hume credentials' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Call Hume API to get access token
    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: apiKey,
        client_secret: secretKey,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Hume OAuth error:', error);
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    const accessToken = data.access_token;

    return new Response(JSON.stringify({ accessToken }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating Hume token:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate access token' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
