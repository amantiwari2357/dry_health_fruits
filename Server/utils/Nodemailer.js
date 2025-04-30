const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dryfruit2664@gmail.com', // Replace with your email
        pass: 'jvck kjxr wesz pfrf',    // Replace with App Password
    }, // Output detailed logs
});

module.exports = { transporter };
