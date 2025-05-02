// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

router.post("/create-payment-intent", async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });
        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        console.error("Stripe Error:", err);
        res.status(500).json({ error: err.message });
    }
});

router.post('/send-invoice', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        campType,
        timing,
        location,
        amount
    } = req.body;

    const doc = new PDFDocument();
    const invoiceName = `invoice_${Date.now()}.pdf`;
    const invoicePath = path.join(__dirname, `../invoices/${invoiceName}`);

    // Ensure invoice folder exists
    fs.mkdirSync(path.dirname(invoicePath), { recursive: true });

    // Generate PDF
    doc.pipe(fs.createWriteStream(invoicePath));
    doc.fontSize(20).text('Summer Camp Invoice', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Name: ${firstName} ${lastName}`);
    doc.text(`Email: ${email}`);
    doc.text(`Phone: ${phone}`);
    doc.text(`Camp Type: ${campType}`);
    if (campType === 'half') doc.text(`Timing: ${timing}`);
    doc.text(`Location: ${location}`);
    doc.text(`Total: $${amount}`);
    doc.end();

    doc.on('finish', async () => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'prarthan1121@gmail.com',
                pass: 'ykww lilc zedr iktx' // Use Gmail App Password
            }
        });

        const mailOptions = {
            from: 'prarthan1121@gmail.com',
            to: email,
            subject: 'Your Summer Camp Invoice',
            text: 'Thank you for your payment! Please find your invoice attached.',
            attachments: [{
                filename: invoiceName,
                path: invoicePath
            }]
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Invoice sent to', email);
            res.status(200).json({ success: true });
        } catch (err) {
            console.error('Email send failed:', err);
            res.status(500).json({ error: 'Failed to send email.' });
        }
    });
});

module.exports = router;
