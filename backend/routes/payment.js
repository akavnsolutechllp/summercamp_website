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

const { Resend } = require('resend');
const resend = new Resend('re_EtPjd9Nq_3DQ82hrmJsu57NWysHtNKVjr');



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
      
      .moveDown();

    doc.fillColor('#f79824').text('Camp Details', { underline: true });
    doc.fillColor('black').moveDown(0.5)
      .text(`Camp Location: ${location}`)
      .text(`Camp Type: ${campType === 'full' ? 'Full Day (9AM - 4PM)' : 'Half Day'}`)
    
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



router.post("/send-invoice", async (req, res) => {
  try {
    const {
      userId,
      firstName,
      lastName,
      email,
      phone,
      campType,
      campSession,
      activity,
      amount,
    } = req.body;



    // 1. Generate invoice ID
    const invoiceId = await generateInvoiceId();

    const currentDate = new Date().toLocaleDateString('en-US');

    const parts = campSession.split('|').map(p => p.trim());
    const parts2 = activity.split('|').map(p => p.trim());

    const campLocation = parts[0]; // "Northview High School"
    const campDate = parts[1];     // "June 9 – June 12"

    const onlyActivity = parts2[0];
    const time = parts2[1];

    const ftime = "09:00AM - 04:00PM "

// Set campTime based on timing

    // 2. Save invoice ID to user in DB
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.invoice = { invoiceid: invoiceId, sent: true };
    await user.save();

    // 3. Create PDF
    const doc = new PDFDocument({ margin: 50 });
    let buffers = [];

    doc.on('data', buffers.push.bind(buffers));

    doc.on('end', async () => {
      const pdfData = Buffer.concat(buffers);
      try {
        const emailResponse = await resend.emails.send({
          from: 'registrations@sparkstemacademy.com',
          to: email,
          subject: `Camp Registration Confirmation – ${firstName}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; text-align: justify; color: #000;">
              <p>Dear ${firstName} and Parent/Guardian,</p>
        
              <p>Thank you for registering for our upcoming camp! We’re excited to have you join us.</p>
        
              <p><strong>Here are the details of your registration:</strong></p>
        
              <ul>
                <li><strong>Student Name:</strong> ${firstName} ${lastName}</li>
                <li><strong>Camp Type:</strong> ${campType === 'half' ? 'Half Day' : 'Full Day'}</li>
                <li><strong>Date:</strong> ${campDate}</li>
                <li><strong>Time:</strong> ${campType === 'half' ? time : ftime}</li>
                <li><strong>Location:</strong> ${campLocation}</li>
                <li><strong>Camp:</strong> ${campType === 'half' ? onlyActivity: activity}</li>
              </ul>
        
              <p>
                ${
                  campType === 'half'
                    ? 'Please bring a water bottle and snacks.'
                    : 'Please bring a water bottle, lunch, and snacks.'
                }
              </p>
        
              <p>If you have any questions or need further assistance, feel free to contact us at <a href='tel:(678) 888-1484'>(678) 888-1484</a>.</p>
        
              <p>We look forward to seeing you at camp!</p>
        
              <p>For more information, visit <a href="https://sparkstemacademy.com" target="_blank" >Spark Stem Academy</a></p>
        
              <p>Best regards,<br><strong>Spark Stem Academy</strong></p>
            </div>
          `,
          attachments: [
            {
              filename: `Invoice_${firstName}_${lastName}.pdf`,
              content: pdfData.toString('base64'),
              type: 'application/pdf',
              disposition: 'attachment',
            },
          ],
        });
      
        return res.status(200).json({ success: true, message: "Invoice sent successfully." });
        
      } catch (emailErr) {
        console.error("Email send error:", emailErr);
        return res.status(500).json({ success: false, message: "Invoice created, but email failed." });
      }
      
    });

    // Build PDF content
    const logoPath = path.join(__dirname, '../assets/logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 50, 45, { width: 80 });
    }

    doc
      .fontSize(20)
      .text('Summer Camp Invoice', { align: 'center' })
      .moveDown(0.5);

    doc
      .fontSize(12)
      .text(`Invoice ID: ${invoiceId}`, { align: 'center' })
      .text(`Date: ${currentDate}`, { align: 'center' })
      .moveDown();

    doc.moveTo(50, doc.y).lineTo(550, doc.y).stroke().moveDown(1);

    doc.fontSize(16).text(`Student: ${firstName} ${lastName}`).moveDown(0.5);

    doc.fontSize(14).text(`Contact Details`, {underline:true}).moveDown(0.5);
    doc.fontSize(12)
      .text(`Name: ${firstName} ${lastName}`).moveDown(0.2)
      .text(`Phone: ${phone}`).moveDown(0.2)
      .text(`Email: ${email}`).moveDown(0.2)
      .moveDown(1);

    doc.fontSize(14).text('Camp Details', { underline: true }).moveDown(0.5);
    doc.fontSize(12)
    .text(`Camp Type: ${campType}`).moveDown(0.2)
    .text(`Date: ${campDate}`).moveDown(0.2)
      .text(`Time: ${campType === 'half' ? `${time}` : '09:00 AM - 04:00 PM'}`).moveDown(0.2)
      .text(`Location: ${campLocation}`).moveDown(0.2)
      .text(`Camp: ${onlyActivity}`).moveDown(0.2)
      .moveDown(1);

    doc.fontSize(14).text('Payment Summary', { underline: true }).moveDown(0.5);
    doc.fontSize(12).text(`Paid Amount: $${amount}`).moveDown(2);

    doc.fontSize(10)
      .text('Thank you for registering for our summer camp!', { align: 'center' });

    doc.end(); // Triggers 'end' event

  } catch (err) {
    console.error("Invoice generation error:", err);
    if (!res.headersSent) {
      res.status(500).json({ message: "Failed to generate invoice", error: err.message });
    }
  }
});

module.exports = router;


// Send invoice email
      // try {
      //   const emailResponse = await resend.emails.send({
      //     from: 'saparkstemacademy <noreply@sparkstemacademy.com>',
      //     to: email,
      //     subject: `Invoice - ${invoiceId}`,
      //     text: 'Thanks for registering.',
      //     attachments: [
      //       {
      //         filename: `Invoice_${firstName}_${lastName}.pdf`,
      //         content: pdfData.toString('base64'),
      //         type: 'application/pdf',
      //         disposition: 'attachment',
      //       },
      //     ],
      //   });
      
      //   console.log("✅ Email sent:", emailResponse);
      // } catch (emailError) {
      //   console.error('❌ Email sending failed:', emailError);
      // }