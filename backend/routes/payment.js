// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const User = require('../models/User');

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

router.post("/send-invoice", async (req, res) => {
    const {
      userId,
      firstName,
      lastName,
      email,
      phone,
      campType,
      timing,
      location,
      amount,
    } = req.body;
  
    if (
      !userId ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !campType ||
      !location ||
      !amount
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }
  
    try {
        // Generate next invoice ID (SSA001, SSA002, ...)
        let lastInvoiceNumber = 0;
        const lastUserWithInvoice = await User.findOne({ "invoice.invoiceid": { $exists: true } })
          .sort({ createdAt: -1 });
    
        if (lastUserWithInvoice && lastUserWithInvoice.invoice && lastUserWithInvoice.invoice.invoiceid) {
          const match = lastUserWithInvoice.invoice.invoiceid.match(/SSA(\d+)/);
          if (match) lastInvoiceNumber = parseInt(match[1]);
        }
    
        const invoiceId = `SSA${String(lastInvoiceNumber + 1).padStart(3, "0")}`;
    
        // Generate PDF
        const doc = new PDFDocument();
        const invoiceName = `${invoiceId}.pdf`;
        const invoicePath = path.join(__dirname, `../invoices/${invoiceName}`);
        fs.mkdirSync(path.dirname(invoicePath), { recursive: true });
    
        doc.pipe(fs.createWriteStream(invoicePath));
    
        // Logo
        const logoPath = path.join(__dirname, "../assets/logo.png");
        if (fs.existsSync(logoPath)) {
          doc.image(logoPath, 50, 45, { width: 100 });
        }
    
        doc.fontSize(20).text("Invoice", 0, 50, { align: "right" }).moveDown();
        doc.fontSize(10).text(`Invoice ID: ${invoiceId}`, { align: "right" });
        doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(2);
        doc.moveTo(50, 130).lineTo(550, 130).stroke();
    
        doc
          .fontSize(12)
          .fillColor('#f79824')
          .text('Camper Information', { underline: true });
    
        doc
          .fillColor('black')
          .moveDown(0.5)
          .text(`Camper Name: ${firstName} ${lastName}`)
          .text(`Email: ${email}`)
          .text(`Phone: ${phone}`)
          .text(`Camp Location: ${location}`)
          .moveDown();
    
        // Camp Details Section
        doc
          .fillColor('#f79824')
          .text('Camp Details', { underline: true });
    
        doc
          .fillColor('black')
          .moveDown(0.5)
          .text(`Camp Type: ${campType === 'full' ? 'Full Day (9AM - 4PM)' : 'Half Day'}`);
    
        if (campType === 'half') {
          doc.text(`Timing: ${timing === 'morning' ? 'Morning (9AM - 12PM)' : 'Afternoon (1PM - 4PM)'}`);
        }
    
        doc.moveDown();
    
        // Payment Section
        doc
          .fillColor('#f79824')
          .text('Payment Summary', { underline: true });
    
        doc
          .fillColor('#EE5073')
          .fontSize(16)
          .moveDown(0.5)
          .text(`Total Paid: $${amount}`, { align: 'left' });
    
        doc.end();
    
        doc.on("finish", async () => {
          const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: "prarthan1121@gmail.com",
              pass: "hsxz bsbn oxne iwcf", // App password
            },
          });
    
          const mailOptions = {
            from: "prarthan1121@gmail.com",
            to: email,
            subject: "Your Summer Camp Invoice",
            text: `Thank you for your payment! Your Invoice ID is ${invoiceId}.`,
            attachments: [{ filename: invoiceName, path: invoicePath }],
          };
    
          try {
            await transporter.sendMail(mailOptions);
    
            // Update user with invoice field after successful email
            await User.findByIdAndUpdate(userId, {
              invoice: {
                invoiceid: invoiceId,
                sent: true
              }
            });
    
            console.log("Invoice sent to", email);
            res.status(200).json({ success: true });
          } catch (err) {
            console.error("Email send failed:", err);
            res.status(500).json({ error: "Failed to send email." });
          }

        });
      } catch (err) {
        console.error("Invoice Generation Error:", err);
        res.status(500).json({ error: "Internal server error" });
      }
  });
  

module.exports = router;
