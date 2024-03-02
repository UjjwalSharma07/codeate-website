const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const projectSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProjectMarkdown",
    required: [true, "Please select a project"],
    unique: true,
  },
  isSubmitted: {
    type: Boolean,
    default: false,
  },
  githubLink: {
    type: String,
  },
  deployedLink: {
    type: String,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    projects: {
      type: [projectSchema],
      default: [],
    },
    github:{
      type: String,
    },
    portfolio:{
      type: String,
    },
    role:{
      type: String,
    },
    profile:{
      type: String,
    },
    linkedin:{
      type: String,
    },
    resume:{
      type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    phoneNumber: String, // Add phone number field,
  },
  {
    timestamps: true,
  }
);


// Returning JWT
userSchema.methods.getJwtToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
  console.log("getJwtToken in userModel", token);
  return token;
};

// generate password reset token
userSchema.methods.getResetPasswordToken = function () {
  // generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // hash and set to resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000; // 30 minutes

  return resetToken;
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
