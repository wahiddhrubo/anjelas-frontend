const nodemailer = require("nodemailer");
const ejs = require("ejs");
const axios = require("axios");

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

async function getPubFile(file) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${file}`);
  return res.data;
}

const sendEmail = async ({ receiver, tempLoc, subject, link }) => {
  const template = await getPubFile(tempLoc);

  const data = template.replace("%%LINK%%", link);

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: receiver,
    subject: subject,
    html: data,
  };

  await transport.sendMail(mailOptions);
};

module.exports = sendEmail;
