import { createTransport } from 'nodemailer'; // You can avoid nodemailer and use SMTP libraries like "emailjs"
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // SMTP settings for your email provider
        const transporter = createTransport({
            host: process.env.SMTP_HOST,  // You can use Gmail's SMTP server
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'akshitsingh23052003@gmail.com',
            subject: `Contact form submission from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error("Email send error:", error);
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).end();  // Method Not Allowed
    }
}
