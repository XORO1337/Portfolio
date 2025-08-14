import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health
app.get('/api/health', (_req, res) => {
	res.json({ ok: true });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
	const { name, email, subject, message } = req.body || {};
	if (!name || !email || !message) {
		return res.status(400).json({ error: 'Missing required fields' });
	}

	try {
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT || 587),
			secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const toEmail = process.env.CONTACT_TO || process.env.SMTP_USER;

		const info = await transporter.sendMail({
			from: {
				name: name || 'Portfolio Contact',
				address: process.env.SMTP_FROM || process.env.SMTP_USER,
			},
			replyTo: email,
			to: toEmail,
			subject: subject || `New message from ${name}`,
			text: `From: ${name} <${email}>
Subject: ${subject || '(no subject)'}

${message}`,
			html: `
				<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
					<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
					<p><strong>Subject:</strong> ${subject || '(no subject)'}</p>
					<hr/>
					<p style="white-space:pre-wrap">${String(message).replace(/</g, '&lt;')}</p>
				</div>
			`,
		});

		res.json({ sent: true, messageId: info.messageId });
	} catch (err) {
		console.error('Email send failed:', err);
		res.status(500).json({ error: 'Failed to send email' });
	}
});

app.listen(PORT, () => {
	console.log(`API server listening on http://localhost:${PORT}`);
});
