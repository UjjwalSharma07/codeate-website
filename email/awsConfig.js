const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_Secret_Access,
    region: "ap-south-1",
});
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

module.exports = ses;
