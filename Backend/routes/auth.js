const express = require("express");
const router = express.Router();
const passport = require("passport");

require("dotenv").config();

// controllers
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// validations
const {
  ValidateSignupRequest,
  isRequestValidated,
  ValidateSigninRequest,
} = require("../validators/auth");

router.get("/", (req, res) => {
  res.send("This is for Auth Routes");
});

// router.get('/protected', verifyToken , (req, res)=>{
//     res.send("hello");
// })

// resgister a user
router.post(
  "/register",
  ValidateSignupRequest,
  isRequestValidated,
  registerUser
);

// login
router.post("/login", ValidateSigninRequest, isRequestValidated, loginUser);

// logout
router.get("/logout", logoutUser);

// forgot password
router.post("/password/forgot", forgotPassword);

// reset password
router.put("/password/reset/:token", resetPassword);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.send("welcome back");
});

module.exports = router;
