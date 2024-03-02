const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

//  utils
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

// Register User
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    console.log(name, email, password, phoneNumber);

    // Validate input data
    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).json({ error: 'Please provide name, email, password, and phoneNumber' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber, // Add phoneNumber to the user creation,
      linkedin: "",
      github: "",
      role: "",
      profile: "",
      portfolio: "",
      resume: ""
    });

    // Respond with a formatted user object (without sensitive info)
    const formattedUser = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber, // Include phoneNumber in the response
    };

    return res.status(201).json(formattedUser);
  } catch (error) {
    // Handle errors
    console.error('Error in user registration:', error);
    return res.status(500).json({ error: 'An error occurred during registration' });
  }
};


// login a user

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check if email and password are entered by user
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email and Password", 400));
    }

    // check if user exists or not
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    // check password is correct of existing users
    const isPasswordMatched = await bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    user.password = undefined;
    sendToken(user, 200, res, "User Login Successfully!");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};



exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Not a registered email! Enter a registered email.",
      });
    }

    // Get resetToken
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Create reset password URL
    const resetUrl = `https://www.codeate.in/${resetToken}`;

    // Compose email message
    const message = `You requested a password reset. Here is your password reset link:\n\n${resetUrl}\n\nIf you didn't request this, please ignore this email.`;

    await sendEmail({
      email: user.email,
      subject: "Codeate Password Recovery",
      message,
    });

    return res.status(200).json({
      success: true,
      message: `Email sent successfully to ${user.email}. Check your email!`,
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({
      success: false,
      message: "Email could not be sent.",
    });
  }
};


// reset password
exports.resetPassword = async (req, res, next) => {
  // Hash URL tokens

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  console.log(resetPasswordToken);
  const user = await UserModel.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  // setup new password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res, "Password Reset Successfully!");
};

exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "User Logout Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
