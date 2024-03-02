
import AWS from "aws-sdk"
import sharp from 'sharp';
import CERTIFICATE from '../../certificate/CERTIFICATE.png'

const ses = new AWS.SES({
  accessKeyId:'AKIAU7IV7PHPDU6AMR75',
  secretAccessKey: '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',
  region: "ap-south-1",
});

 async function sendEmail({ to, subject, message }) {
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
    Attachments: [
      {
        Filename: 'certificate.png', 
        Content: attachment, 
      },
    ],
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

async function addTextOnImage(courseName, studentName, currentDate) {
  try {
    const width = 1000;
    const height = 647;
    const text = "Nirbhay";
    const mytext = `This is to certify that ${courseName} has completed by ${studentName} on ${currentDate}.`
    const mytext2= "This project has been completed in accordance with the requirements outlined in the project guidelines."
    const mytext3="Best Regards.";

    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title { fill: white; font-size: 40px;  font-weight: bold;}
      .mytit {fill: white; font-size: 20px;}
      </style>
      <text x="10%" y="60%"  class="title">${text}</text>
      <text x="10%" y="70%" class="mytit" >${mytext}</text>
      <text x="10%" y="74%" class="mytit" >${mytext2}</text>
      <text x="10%" y="82%" class="mytit" >${mytext3}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    const image = await sharp('CERTIFICATE.png')
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 20,
        },
      ])
      .toFile("sammy-text-overlay.png");
    return "sammy-text-overlay.png"
  } catch (error) {
    console.log(error);
  }
}


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { recipient, courseName, studentName } = req.body;

    try {
      const currentDate = new Date().toLocaleDateString();
      const certificatePath = await addTextOnImage(courseName, studentName, currentDate);
     
      const mailOptions = {
        from: 'contact.code8@gmail.com', // Update with your email address
        to: recipient,
        subject: `Certificate of Project Submission - ${courseName} - ${studentName}`,
        text: `Dear ${studentName},\n
  We are pleased to inform you that you have successfully completed the project submission requirement for the ${courseName} at Codeate. \n
  
  Your hard work and dedication have paid off, and you have demonstrated an excellent understanding of the subject matter.\n
  
  As a token of recognition, we are delighted to award you with a Certificate of Project Submission. 
  This certificate represents your commitment and accomplishment in completing the project to the best of your abilities.\n
  
  We hope that this project has been a valuable learning experience for you, and we are confident that you have gained a deeper understanding of the subject matter. 
  We believe that this accomplishment will serve you well in your future academic and professional endeavours.\n
  
  Once again, congratulations on your achievement, and we wish you all the best for your future endeavours.\n
  
  Kindly do not forget to share and flaunt your certificate with your peers!
  Keep building cool stuff 🚀🚀\n\n
  
  Tag Codeate !!\n
  
  Best regards,
  Team Codeate
         `,
        attachments: [
          {
            filename: "certificate.png",
            path: certificatePath,
          },
        ],
      };

      const params = {
        Destination: {
          ToAddresses: [recipient],
        },
        Message: {
          Body: {
            Html: {
              Data: `Dear ${studentName},\n
              We are pleased to inform you that you have successfully completed the project submission requirement for the ${courseName} at Codeate. \n
              
              Your hard work and dedication have paid off, and you have demonstrated an excellent understanding of the subject matter.\n
              
              As a token of recognition, we are delighted to award you with a Certificate of Project Submission. 
              This certificate represents your commitment and accomplishment in completing the project to the best of your abilities.\n
              
              We hope that this project has been a valuable learning experience for you, and we are confident that you have gained a deeper understanding of the subject matter. 
              We believe that this accomplishment will serve you well in your future academic and professional endeavours.\n
              
              Once again, congratulations on your achievement, and we wish you all the best for your future endeavours.\n
              
              Kindly do not forget to share and flaunt your certificate with your peers!
              Keep building cool stuff 🚀🚀\n\n
              
              Tag Codeate !!\n
              
              Best regards,
              Team Codeate
                     `,
            },
          },
          Subject: {
            Data: `Certificate of Project Submission - ${courseName} - ${studentName}`,
          },
        },
        Source: "contact.code8@gmail.com",
        // Attachments: [
        //   {
        //     Filename: 'certificate.png', 
        //     Path: certificatePath, 
        //   },
        // ],
      };
    
      try {
        const result = await ses.sendEmail(params).promise();
        console.log("this is res", result);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error sending certificate.' });
    }

   
   
  } else {
    res.status(405).end(); 
  }
}
