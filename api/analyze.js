const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { image } = req.body;
  if (!image) return res.status(400).json({ error: 'No image provided' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 80,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: { type: 'base64', media_type: 'image/jpeg', data: image }
              },
              {
                type: 'text',
                text: "What product is in this image? Reply ONLY with the product name, brand and model for an Amazon search. Max 8 words. No explanation."
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    const productName = data.content?.[0]?.text?.trim() || '';
    res.status(200).json({ name: productName });

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Failed to analyze image' });
  }
};

