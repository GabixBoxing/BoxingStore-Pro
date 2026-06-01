
export const config = { runtime: 'edge' };

export default async function handler(req) {
  if(req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { image } = await req.json();
  if(!image) return new Response('No image', { status: 400 });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if(!apiKey) return new Response('Not configured', { status: 500 });

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 80,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: image } },
          { type: 'text', text: 'What product is in this image? Reply ONLY with the product name, brand and model for an Amazon search. Max 8 words. No explanation.' }
        ]
      }]
    })
  });

  const data = await res.json();
  const name = data?.content?.[0]?.text?.trim() || '';
  return new Response(JSON.stringify({ name }), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}
