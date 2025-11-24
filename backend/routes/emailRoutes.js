import express from 'express';
import nodemailer from 'nodemailer';   

const router = express.Router();

router.post("/send", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contact Form Submission from ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully" });
    }
    catch (error) {
        console.error("Error sending email: ", error);
        res.status(500).json({ error: "Error sending email" });
    }
})

export default router;