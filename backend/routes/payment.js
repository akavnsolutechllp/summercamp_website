// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const generateInvoiceId = require("../utils/generateInvoiceId");




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

const generateInvoicePDF = (invoicePath, data) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(invoicePath);

    doc.pipe(stream);

    const {
      invoiceId, firstName, lastName, email, phone,
      campType, timing, location, amount
    } = data;

    const logoPath = path.join(__dirname, "../assets/logo.png");
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 50, 45, { width: 100 });
    }

    doc.fontSize(20).text("Invoice", 0, 50, { align: "right" }).moveDown();
    doc.fontSize(10).text(`Invoice ID: ${invoiceId}`, { align: "right" });
    doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: "right" }).moveDown(2);
    doc.moveTo(50, 130).lineTo(550, 130).stroke();

    doc.fillColor('#f79824').fontSize(12).text('Camper Information', { underline: true });
    doc.fillColor('black')
      .moveDown(0.5)
      .text(`Camper Name: ${firstName} ${lastName}`)
      .text(`Email: ${email}`)
      .text(`Phone: ${phone}`)
      .text(`Camp Location: ${location}`)
      .moveDown();

    doc.fillColor('#f79824').text('Camp Details', { underline: true });
    doc.fillColor('black').moveDown(0.5)
      .text(`Camp Type: ${campType === 'full' ? 'Full Day (9AM - 4PM)' : 'Half Day'}`);

    if (campType === 'half') {
      doc.text(`Timing: ${timing === 'morning' ? 'Morning (9AM - 12PM)' : 'Afternoon (1PM - 4PM)'}`);
    }

    doc.moveDown();
    doc.fillColor('#f79824').text('Payment Summary', { underline: true });
    doc.fillColor('#EE5073').fontSize(16).moveDown(0.5)
      .text(`Total Paid: $${amount}`, { align: 'left' });

    doc.end();

    stream.on("finish", () => resolve());
    stream.on("error", reject);
  });
};


// router.post("/send-invoice", async (req, res) => {
//   const {
//     userId, firstName, lastName, email, phone,
//     campType, timing, location, amount,
//   } = req.body;

//   if (!userId || !firstName || !lastName || !email || !phone || !campType || !location || !amount) {
//     return res.status(400).json({ error: "Missing required fields." });
//   }

//   try {
//     // Generate invoice ID
//     let lastInvoiceNumber = 0;
//     const lastUserWithInvoice = await User.findOne({ "invoice.invoiceid": { $exists: true } }).sort({ createdAt: -1 });
//     if (lastUserWithInvoice?.invoice?.invoiceid) {
//       const match = lastUserWithInvoice.invoice.invoiceid.match(/SSA(\d+)/);
//       if (match) lastInvoiceNumber = parseInt(match[1]);
//     }

//     const invoiceId = `SSA${String(lastInvoiceNumber + 1).padStart(3, "0")}`;
//     const invoiceName = `${invoiceId}.pdf`;
//     const invoicePath = path.join(__dirname, `../invoices/${invoiceName}`);
//     fs.mkdirSync(path.dirname(invoicePath), { recursive: true });

//     // ✅ Generate and write PDF safely
//     await generateInvoicePDF(invoicePath, {
//       invoiceId, firstName, lastName, email, phone, campType, timing, location, amount
//     });

//     // ✉️ Send Email
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.verify();

//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: email,
//       subject: "Your Summer Camp Invoice",
//       text: `Thank you for your payment! Your Invoice ID is ${invoiceId}.`,
//       attachments: [{ filename: invoiceName, path: invoicePath }],
//     });

//     // 💾 Save invoice reference
//     await User.findByIdAndUpdate(userId, {
//       invoice: {
//         invoiceid: invoiceId,
//         sent: true,
//       },
//     });

//     console.log("✅ Invoice email sent to", email);
//     res.status(200).json({ success: true });

//   } catch (err) {
//     console.error("❌ Error sending invoice:", err);
//     res.status(500).json({ error: "Failed to send invoice.", details: err.message });
//   }
// });



router.post("/generate-invoice", async (req, res) => {
  try {
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

    // 1. Generate invoice ID
    const invoiceId = await generateInvoiceId();

    // 2. Save invoice ID to user in DB
    const user = await User.findById(userId); // Note that here we use findById, which uses Mongo's _id
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the invoice field with the generated invoiceId
    user.invoice = { invoiceid: invoiceId, sent: true };

    // Save the updated user
    await user.save();

    // 3. Create PDF
    const doc = new PDFDocument({ margin: 50 });
let buffers = [];

doc.on('data', buffers.push.bind(buffers));
doc.on('end', () => {
  const pdfData = Buffer.concat(buffers);
  res
    .status(200)
    .set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=Invoice_${firstName}_${lastName}.pdf`,
    })
    .send(pdfData);
});

// 🖼️ Add Logo
const logoPath = path.join(__dirname, '../assets/logo.png');
if (fs.existsSync(logoPath)) {
  doc.image(logoPath, 50, 45, { width: 80 });
}

// 🧾 Title & Invoice ID (centered)
doc
  .fontSize(20)
  .text('Summer Camp Invoice', { align: 'center' })
  .moveDown(0.5);

doc
  .fontSize(12)
  .text(`Invoice ID: ${invoiceId}`, { align: 'center' })
  .moveDown();

// ─────────────────────────────────────────────────────────────
doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(1);

// 🙋 Camper Information
doc
  .fontSize(14)
  .text('Camper Information', 50, doc.y, { width: 500, align: 'left', underline: true })
  .moveDown(0.5);

doc
  .fontSize(12)
  .text(`Name: ${firstName} ${lastName}`, 50, doc.y, { width: 500, align: 'left' })
  .text(`Email: ${email}`, 50, doc.y, { width: 500, align: 'left' })
  .text(`Phone: ${phone}`, 50, doc.y, { width: 500, align: 'left' })
  .text(`Location: ${location}`, 50, doc.y, { width: 500, align: 'left' })
  .moveDown(1);

// 🏕️ Camp Details
doc
  .fontSize(14)
  .text('Camp Details', 50, doc.y, { width: 500, align: 'left', underline: true })
  .moveDown(0.5);

doc
  .fontSize(12)
  .text(`Camp Type: ${campType === 'half' ? 'Half Day' : 'Full Day'}`, 50, doc.y, { width: 500, align: 'left' })
  .text(`Timing: ${timing}`, 50, doc.y, { width: 500, align: 'left' })
  .moveDown(1);

// 💰 Payment Summary
doc
  .fontSize(14)
  .text('Payment Summary', 50, doc.y, { width: 500, align: 'left', underline: true })
  .moveDown(0.5);

doc
  .fontSize(12)
  .text(`Total Amount: $${amount}`, 50, doc.y, { width: 500, align: 'left' })
  .moveDown(2);

// 🙏 Footer
doc
  .fontSize(10)
  .text('Thank you for registering for our summer camp!', 50, doc.y, {
    width: 500,
    align: 'center',
  });

doc.end();

  } catch (err) {
    console.error("Invoice generation error:", err);
    res.status(500).json({ message: "Failed to generate invoice", error: err.message });
  }
});
  

module.exports = router;



