

// import AWS from 'aws-sdk';
// import nodemailer from 'nodemailer';
// // import { createReadStream } from 'fs';
// import { resolve } from 'path';
// // import PDFDocument from 'pdfkit';

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// const transporter = nodemailer.createTransport({
//   SES: new AWS.SES({ apiVersion: '2010-12-01' }),
// });

// async function sendCertificateEmail({ recipient, courseName, studentName }) {
//   const doc = new PDFDocument();
//   const certificateName = `${courseName}_${studentName}_${new Date().toISOString()}`;
//   const certificateFilePath = resolve(
//     __dirname,
//     `./certificates/${certificateName}.pdf`,
//   );
//   const certificateFileStream = createReadStream(certificateFilePath);

//   doc.pipe(certificateFileStream);
//   doc.font('Helvetica-Bold');
//   doc.fontSize(20);
//   doc.text(`Certificate of Completion\n\n${courseName}\n\n`, {
//     align: 'center',
//   });
//   doc.fontSize(14);
//   doc.text('This certificate is awarded to:', { align: 'center' });
//   doc.text(`${studentName}\n\n`, { align: 'center' });
//   doc.text(
//     `Date: ${new Date().toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     })}`,
//     { align: 'center' },
//   );
//   doc.end();

//   const mailOptions = {
//     from: process.env.EMAIL_FROM_ADDRESS,
//     to: recipient,
//     subject: `Congratulations on completing ${courseName} course!`,
//     text: `Dear ${studentName},\n\nCongratulations on completing the ${courseName} course! Please find your certificate attached to this email.\n\nBest regards,\nYour Name`,
//     attachments: [
//       {
//         filename: `${certificateName}.pdf`,
//         content: certificateFileStream,
//         contentType: 'application/pdf',
//       },
//     ],
//   };

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         reject(error);
//       } else {
//         console.log(`Email sent to ${recipient}: ${info.response}`);
//         resolve(info);
//       }
//     });
//   });
// }

// export default sendCertificateEmail;
