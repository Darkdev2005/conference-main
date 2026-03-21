import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  const { email, phone, message } = req.body;

  const text = `
📥 *New Contact Submission*:
📧 Email: ${email}
📱 Phone: ${phone}
📝 Message: ${message}
`;

  const token = process.env.VITE_TELEGRAM_TOKEN;
  const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    });

    if (!response.ok) throw new Error('Telegram Error');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send' });
  }
});

app.listen(port, () => {
  console.log(`✅ Telegram proxy server listening at http://localhost:${port}`);
});
