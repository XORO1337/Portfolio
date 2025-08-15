const nodemailer = require('nodemailer');

function parseBody(req) {
  if (req.body) return Promise.resolve(req.body);
  return new Promise((resolve) => {
    try {
      const chunks = [];
      req.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
      req.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        try { resolve(raw ? JSON.parse(raw) : {}); } catch { resolve({}); }
      });
      req.on('error', () => resolve({}));
    } catch (_) {
      resolve({});
    }
  });
}

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET, HEAD');
  const reqHeaders = req.headers['access-control-request-headers'];
  res.setHeader('Access-Control-Allow-Headers', reqHeaders || 'Content-Type, Authorization, Accept');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method === 'HEAD') return res.status(200).end();
  if (req.method === 'GET') return res.status(200).json({ ok: true });
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS, GET, HEAD');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = await parseBody(req);
  const { name, email, subject, message } = body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const toEmail = process.env.CONTACT_TO || process.env.SMTP_USER;
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@localhost.localdomain';

    const info = await transporter.sendMail({
      from: { name: name || 'Portfolio Contact', address: fromAddress },
      replyTo: email,
      to: toEmail,
      subject: subject || `New message from ${name}`,
      text: `From: ${name} <${email}>\nSubject: ${subject || '(no subject)'}\n\n${message}`,
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject || '(no subject)'}</p>
          <hr/>
          <p style="white-space:pre-wrap">${String(message).replace(/</g, '&lt;')}</p>
        </div>
      `,
    });

    return res.status(200).json({ sent: true, messageId: info.messageId });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
