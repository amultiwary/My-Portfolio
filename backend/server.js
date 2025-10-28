// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { sendMail } = require("./mailer");

const app = express();
app.use(express.json());

// CORS: allow local dev + deployed frontend (add your Vercel url)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  process.env.FRONTEND_URL // set this in .env to your Vercel URL e.g. https://your-app.vercel.app
];

app.use(cors({
  origin: (origin, callback) => {
    // allow non-browser tools like Postman (no origin)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("CORS not allowed"), false);
  },
  credentials: true
}));

// Basic rate-limiting to prevent spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5 // limit each IP to 5 requests per windowMs
});
app.use("/api/contact", limiter);

// contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message are required." });
    }

    // Build email body
    const html = `
      <h3>New contact from website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${mobile ? `<p><strong>Mobile:</strong> ${mobile}</p>` : ""}
      <p><strong>Subject:</strong> ${subject || "(none)"}</p>
      <hr/>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    // send to your receiving email (EMAIL_TO)
    await sendMail({
      to: process.env.EMAIL_TO,
      subject: `Contact form: ${subject || "No subject"}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html,
      from: `"${name}" <${email}>` // email will show as from the visitor; some SMTP providers may override this
    });

    return res.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Failed to send message." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
