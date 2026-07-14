// Serverless contact endpoint — sends the form via Mailgun.
// Secrets come from environment variables (set them in the Vercel dashboard),
// never hard-code the API key here: this file is public in the repo.
//
// Required env vars:
//   MAILGUN_API_KEY   e.g. 06c5...716e
//   MAILGUN_DOMAIN    e.g. sandbox....mailgun.org
//   MAILGUN_BASE_URL  e.g. https://api.mailgun.net   (EU: https://api.eu.mailgun.net)
//   CONTACT_TO        the inbox that should receive the messages
// Optional:
//   CONTACT_FROM      From-header (default: "Website <postmaster@DOMAIN>")

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    MAILGUN_API_KEY,
    MAILGUN_DOMAIN,
    MAILGUN_BASE_URL = 'https://api.mailgun.net',
    CONTACT_TO,
    CONTACT_FROM
  } = process.env;

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !CONTACT_TO) {
    console.error('Mailgun env vars missing');
    return res.status(500).json({ error: 'Server not configured' });
  }

  // Body can arrive parsed (Vercel) or as a raw string.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const website = String(body.website || '').trim();
  const message = String(body.message || '').trim();
  const company = String(body.company || '').trim(); // honeypot

  // Bot caught by the honeypot: pretend success, send nothing.
  if (company) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const from = CONTACT_FROM || `Website <postmaster@${MAILGUN_DOMAIN}>`;
  const subject = `Nieuw bericht via serhatcan.nl — ${name}`;
  const text =
    `Naam:    ${name}\n` +
    `E-mail:  ${email}\n` +
    `Telefoon:${phone || '-'}\n` +
    `Website: ${website || '-'}\n` +
    `\n${message}\n`;

  const params = new URLSearchParams({
    from,
    to: CONTACT_TO,
    'h:Reply-To': email,
    subject,
    text
  });

  const url = `${MAILGUN_BASE_URL.replace(/\/$/, '')}/v3/${MAILGUN_DOMAIN}/messages`;
  const auth = 'Basic ' + Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64');

  try {
    const mgRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    });

    if (!mgRes.ok) {
      const detail = await mgRes.text();
      console.error('Mailgun error', mgRes.status, detail);
      return res.status(502).json({ error: 'Mail delivery failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Mailgun request failed', err);
    return res.status(502).json({ error: 'Mail delivery failed' });
  }
};
