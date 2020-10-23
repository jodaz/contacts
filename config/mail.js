const nodemailer = require('nodemailer'); 
const {
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_PORT,
  MAIL_HOST
} = require('./index');

let transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD
  },
});

module.exports = transporter;