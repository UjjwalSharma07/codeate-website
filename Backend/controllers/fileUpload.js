const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const folders = ["project", "user", "technology", "other"];

const UploadFile = (req, res) => {
  const { data, name, mimetype, folder } = req.files.file;
  console.log("FOLDER", folder);
  console.log("Uploading file...", name);
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${
      folder && folders.includes(folder) ? folder : "other"
    }/${Date.now()}-${name}`,
    Body: data,
    ContentType: mimetype,
  };
  try {
    s3.upload(params, (err, result) => {
      if (err) {
        res.status(400).send({ message: "AWS_UPLOAD_ERROR", error: err });
      } else {
        //save result
        res.send({
          message: "FILE_UPLOADED_SUCCESSFULLY",
          url: result.Location,
        });
      }
    });
  } catch (error) {
    res.status(400).send({ message: "AWS_UPLOAD_ERROR", error });
  }
};

module.exports = UploadFile;
