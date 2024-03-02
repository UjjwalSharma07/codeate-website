const express = require('express');
const ses = require('./awsConfig'); // Import the AWS SES configuration

const app = express();

app.post('/send-bulk-emails', async (req, res) => {
  const { recipients, subject, message } = req.body;

  const params = {
    Source: 'your@example.com', // Your verified SES email
    Destination: {
      ToAddresses: recipients,
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: message,
        },
      },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ message: 'Failed to send emails' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
});
