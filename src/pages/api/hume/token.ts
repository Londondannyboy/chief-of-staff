import type { APIRoute } from 'astro';
import { Hume } from 'hume';

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
    const client = new Hume.HumeClient({ apiKey, secretKey });

    const accessToken = await client.empathicVoice.chat.getAccessToken();

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
