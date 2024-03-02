const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
});

const AWS_SES = new AWS.SES();

const sendEmail = async (options) => {
  try {
    const params = {
      Source: "contact.code8@gmail.com",
      Destination: {
        ToAddresses: [options.email],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: options.message,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: options.subject,
        },
      },
    };

    const result = await AWS_SES.sendEmail(params).promise();
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error for better error handling in calling code
  }
};

module.exports = sendEmail;
