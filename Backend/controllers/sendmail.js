const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { recipients, subject, content } = req.body;
    console.log(recipients, subject, content);
    // Check if recipients array is empty
    if (!recipients || recipients.length === 0) {
      return res.status(400).json({ error: 'No recipients provided.' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // Use 465 for secure SSL/TLS connection
        // secure: true, // Use SSL/TLS
        auth: {        
          user: 'yashsharma06033@gmail.com',
          pass: 'eykkxbkwadcrxgra'
        },
      });

    // Create an array to store promises for sending emails
    const emailPromises = [];

    for (const recipientEmail of recipients) {
      const mailOptions = {
        from: '"Yash Sharma 👻" <donnie.glover32@ethereal.email>', // sender address
        to: recipientEmail,
        subject: subject,
        html: content,
      };

      // Push the promise returned by sendMail into the array
      emailPromises.push(transporter.sendMail(mailOptions));
    }

    // Use Promise.all to wait for all emails to be sent
    const emailResults = await Promise.all(emailPromises);

    // Log the messageIds of sent emails
    emailResults.forEach((info) => {
      console.log(info.messageId);
    });

    res.json({ message: 'Bulk emails sent successfully!', emailResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending bulk emails.' });
  }
};

module.exports = sendMail;
