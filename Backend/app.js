const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const { promisify } = require("util");
const nodemailer = require("nodemailer");
const pdf = require("html-pdf");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const path = require("path");
const htmlToImage = require("html-to-image");
const app = express();
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const session = require("express-session");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
// Adjust the base URL
// app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use(morgan("tiny")); // console logging http requests
app.disable("x-powered-by");

const port = process.env.PORT || 5500;

// database connection
require("./config/db");

// passport
require("./utils/passport");

// cookie configuration

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [process.env.cookieKey],
  })
);

// connect cookies with passport

app.use(passport.initialize());
app.use(passport.session());

// setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// middlewares
const errorMiddleware = require("./middlewares/errors");
const { isAuthenticated } = require("./middlewares/auth");

// routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user"); // for project submittion
const projectRoutes = require("./routes/project");
const mentorRoutes = require("./routes/mentor");
const menteeRoutes = require("./routes/mentee");
const postRoutes = require("./routes/post");
const testimonialRoutes = require("./routes/testimonial");
const fileUploadRoutes = require("./routes/fileUpload");
const { default: axios } = require("axios");
const EventRoutes = require("./routes/Event");
const CourseRoutes = require("./routes/Course");
const router = require("./routes/route");
const email = require('./routes/email');
// const { lineTo } = require("pdfkit/js/mixins/vector");

app.use("/auth", authRoutes);
app.use("/user", isAuthenticated, userRoutes); // for project submittion
app.use("/users", userRoutes); // for project submittion
app.use(projectRoutes);
app.use(mentorRoutes);
app.use(testimonialRoutes);
app.use(postRoutes);
app.use(menteeRoutes);
app.use(fileUploadRoutes);
app.use(errorMiddleware);
app.use('/api', email);


app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use("/api", router);
app.use("/Events", EventRoutes);
app.use("/Course", CourseRoutes);

//  **************************************************************Certificate*******************************************************************

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
});
const ses = new AWS.SES();

const { validate } = require('email-validator');


// send bulk mails
app.post('/send-bulk-email', async (req, res) => {
  const { subject, message, recipients } = req.body;

  for (const recipient of recipients) {
    const params = {
      Destination: {
        ToAddresses: [recipient], // Send individual email to each recipient
      },
      Message: {
        Body: {
          Text: { Data: message },
        },
        Subject: { Data: subject },
      },
      Source: 'contact.code8@gmail.com', // Change to your verified email address in SES
    };

    try {
      await ses.sendEmail(params).promise();
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Error sending emails' });
    }
  }

  console.log('Emails sent successfully');
  res.send({ success: true });
});

// app.post('/send-bulk-email', async (req, res) => {
//   const { subject, message, recipients } = req.body;

//   const failedRecipients = [];

//   for (const recipient of recipients) {
//     console.log("the rep", recipient);
//     // Validate the email address before sending
//     if (!validate(recipient)) {
//       console.error(`Invalid email address: ${recipient}`);
//       failedRecipients.push(recipient);
//       continue; // Skip sending emails to invalid addresses
//     }

//     const params = {
//       Destination: {
//         ToAddresses: [recipient], // Send individual email to each recipient
//       },
//       Message: {
//         Body: {
//           Text: { Data: message },
//         },
//         Subject: { Data: subject },
//       },
//       Source: 'contact.code8@gmail.com', // Change to your verified email address in SES
//     };

//     try {
//       await ses.sendEmail(params).promise();
//       console.log(`Email sent successfully to ${recipient}`);
//     } catch (error) {
//       console.error(`Error sending email to ${recipient}:`, error);
//       failedRecipients.push(recipient);
//     }
//   }

//   if (failedRecipients.length > 0) {
//     console.log(failedRecipients);
//     return res.status(500).send({ error: 'Error sending emails', failedRecipients });
//   }

//   console.log('All valid emails sent successfully');
//   res.send({ success: true });
// });


const transporter = nodemailer.createTransport({
  SES: new AWS.SES({ apiVersion: "2010-12-01" }),
});

async function sendCertificateEmail({ recipient, courseName, studentName }) {


  const currentDate = new Date().toLocaleDateString();
  const certificateOutputPath = path.join(
    __dirname,
    "certificate",
    `Frame.png`
  ); // Update the file extension to .png

  // Read the certificate template file
  const certificateTemplatePath = path.join(
    __dirname,
    "certificate",
    "index.html"
  ); // Update the path to your HTML template
  fs.readFile(certificateTemplatePath, "utf8", (err, htmlTemplate) => {
    if (err) {
      res.status(500).send("Error reading HTML template");
    } else {
      // Replace placeholders with dynamic data in the HTML template
      const htmlContent = htmlTemplate
        .replace("[Member Name]", studentName)
        .replace("[Project Name]", courseName);

      // Use html-to-image to convert HTML to PNG image
      htmlToImage
        .toPng(certificateOutputPath, htmlContent)
        .then(() => {
          // Send email with the generated certificate as an attachment
          const mailOptions = {
            from: process.env.FROM_EMAIL, // Your email address
            to: recipient, // Recipient's email address
            subject: "Certificate", // Email subject
            text: "Certificate attached.", // Email text
            attachments: [
              {
                path: certificateOutputPath, // Path to the generated certificate file
              },
            ],
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              res.status(500).send("Error sending email");
            } else {
              res.send("Certificate sent via email");
            }
          });
        })
        .catch(() => {
          res.status(500).send("Error generating certificate");
        });
    }
  })
}

const sharp = require("sharp");

async function addTextOnImage(courseName, studentName, currentDate) {
  try {
    const width = 1000;
    const height = 647;
    const text = `${studentName}`;
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
    const image = await sharp("CERTIFICATE.png")
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


app.post('/generate-certificate', async (req, res) => {
  const { recipient, courseName, studentName } = req.body;

  try {
    const currentDate = new Date().toLocaleDateString();
    const certificatePath = await addTextOnImage(courseName, studentName, currentDate);
    // const emailSubject = `Certificate of Completion - ${courseName}`;
    // const emailText = `Dear ${studentName},\nCongratulations on completing the ${courseName} course!\n\nBest Regards,\nYour Organization`;

    const mailOptions = {
      from: 'contact.code8@gmail.com', // Update with your email address
      to: recipient,
      subject: `Certificate of Project Submission - ${courseName} - ${studentName}`,
      // html: certificateContent,
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

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res
          .status(500)
          .json({ error: "Failed to send certificate via email." });
      } else {
        console.log("Certificate sent successfully:", info.response);
        res.json({ message: "Certificate sent successfully via email." });
      }
    });

    // await sendEmailWithAttachment(recipient, emailSubject, emailText, certificatePath);
    // res.status(200).json({ success: true, message: 'Certificate sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending certificate.' });
  }
});





// ***********************************************************************************************************************************************

let projectI = "";

const CLIENT_ID = "86t7gxg7cp86q1";
const CLIENT_SECRET = "mqTVorZhE278bOWz";
let REDIRECT_URI = `https://codeate.vercel.app/projects/${projectI}`;
const SESSION_SECRET = "This is my funky secret oh my god it has ninja turtles";
let token = "";
let linkedinId = "";

app.use(
  session({ secret: SESSION_SECRET, resave: false, saveUninitialized: true })
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: REDIRECT_URI,
      scope: ["r_emailaddress", "r_liteprofile", "w_member_social"],
    },
    (accessToken, refreshToken, profile, done) => {
      // Store access token in session
      profile.accessToken = accessToken;
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

app.post("/authe", async (req, res) => {
  try {
    const { code } = req.body;
    const { projectId } = req.body;
    REDIRECT_URI = `http://localhost:3000/projects/${projectId}`;
    //  REDIRECT_URI = `https://codeate.vercel.app/projects/${projectId}`
    console.log("the code is ", code);
    console.log("the proid is ", projectId);
    const authData = {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };

    const { data } = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      null,
      { params: authData }
    );
    console.log("the data is --------------------", data);
    token = data.access_token;
    req.session.accessToken = data.access_token;

    res.status(200).json({
      success: true,
      token
    })

    console.log("the token is -------------", token);
    console.log("Everything is good");

    await axios
      .get("https://api.linkedin.com/v2/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "cache-control": "no-cache",
          "X-Restli-Protocol-Version": "2.0.0",
        },
      })
      .then((response) => {
        linkedinId = response.data.id;
        console.log("the id is --------------------", linkedinId);

        res.status(200).json({
          success: true,
          token,
          linkedinId,
        });

        // res.redirect({linkedinId}, '/poste')
        // Use the LinkedIn ID as needed
      })
      .catch((error) => {
        // Handle errors
        console.log("Error in iD", error);
      });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/poste", bodyParser.json(), async (req, res) => {
  // const { accessToken } = req.session
  console.log("the poste token is============", token);
  // const {linkedinId} = req.body
  console.log(linkedinId);
  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://api.linkedin.com/v2/shares",
      {
        owner: `urn:li:person:${linkedinId}`,
        text: {
          text: text,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create LinkedIn post");
  }
});

app.post("/api/linkedin/article", async (req, res) => {
  const { title, text } = req.body;

  try {
    const response = await axios.post(
      "https://api.linkedin.com/v2/ugcPosts",
      {
        author: `urn:li:person:${linkedinId}`,
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: title,
            },
            shareMediaCategory: "ARTICLE",
            media: [
              {
                "com.linkedin.ugc.ShareMedia": {
                  status: "READY",
                  description: {
                    text: text,
                  },
                  originalUrl: "https://codeate8.netlify.app/",
                },
              },
            ],
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to create LinkedIn article");
  }
});

app.listen(port, () => {
  console.log("Server started at", port);
});
