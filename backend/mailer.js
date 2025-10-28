// mailer.js (CommonJS)
const nodemailer = require("nodemailer");

const createTransporter = () => {
  // Example: using SMTP credentials (Mailtrap / Gmail SMTP / SendGrid SMTP)
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,        // e.g. smtp.mailtrap.io or smtp.gmail.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const sendMail = async ({ to, subject, text, html, from }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: from || `"Website Contact" <${process.env.EMAIL_FROM}>`,+
    to,
    subject,
    text,
    html,
  };

  // sendMail returns info or throws
  return transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
