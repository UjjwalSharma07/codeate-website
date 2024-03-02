const nodemailer = require('nodemailer');
const AWS = require('aws-sdk')


/** POST: http://localhost:8080/api/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION
});

const transporter = nodemailer.createTransport({
  SES: new AWS.SES({ apiVersion: '2010-12-01' }),
});


async function sendCertificateEmail({ username, userEmail, text }) {

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: userEmail,
    subject: `Welcome to our platform - ${username} !`,
    text: ` Dear ${username},\n\n

We are delighted to welcome you to our platform ! \n
Thank you for choosing to sign up and become a part of the codeate fam.\n

We want to make sure you have a smooth and enjoyable experience using our platform, so we have put together some useful information to help you get started:\n

To access your account, simply log in using your email address and the password you created during registration.\n

Once you're logged in, you'll be able to explore our platform and all of its features.\n
We've designed it to be user-friendly and easy to navigate, so you should have no trouble finding what you're looking for.\n\n

If you have any questions or concerns at any time, don't hesitate to contact us via 
contact.us@codeate.in\n\n

Best regards,
Team Codeate
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      reject(error);
    } else {
      console.log(`Email sent to ${userEmail}: ${info.response}`);
    }
  });

}

exports.registerMail = async (req, res) => {
  const { username, userEmail, text } = req.body;

  try {
    await sendCertificateEmail({ username, userEmail, text });
    res.status(200).json({ success: true, message: 'Certificate sent successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send certificate!' });
  }
}