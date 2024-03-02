const express = require("express");
const router = express.Router();
const expressFileUpload = require("express-fileupload");
const fileUpload = require("../controllers/fileUpload");
const { isAuthenticated } = require("../middlewares/auth");

router.post("/file", isAuthenticated, fileUpload);

module.exports = router;
