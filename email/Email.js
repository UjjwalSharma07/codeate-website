import AWS from "aws-sdk";

const ses = new AWS.SES({
  accessKeyId:'AKIAU7IV7PHPDU6AMR75',
  secretAccessKey: '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',
  region: "ap-south-1",
});

export default async function sendEmail({ to, subject, message }) {
  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Data: message,
        },
      },
      Subject: {
        Data: subject,
      },
    },
    Source: "contact.code8@gmail.com",
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log("this is res", result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
