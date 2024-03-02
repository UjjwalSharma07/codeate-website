const { body, validationResult } = require('express-validator');

exports.ValidateSignupRequest = [
  body('name').notEmpty().withMessage("Name is required!"),
  body('email').notEmpty().isEmail().withMessage("Valid email is required! (xyz@gmail.com)"),
  body('password').notEmpty().withMessage("Password is required!"),
  body('password').isLength({ min: 6 }).withMessage("Password at least 6 characters long!"),
  body('phoneNumber').notEmpty().withMessage("Phone number is required!"), // Add phoneNumber validation
  body('phoneNumber').isMobilePhone().withMessage("Invalid phone number format!"), // Assuming you want to validate it as a mobile phone number
  body('role'),
  body('linkedin'),
  body('profile'),
  body('role'),
  body('portfolio'),
  body('resume'),
];

exports.ValidateSigninRequest = [
  body('email').notEmpty().isEmail().withMessage("Valid email is required!"),
  body('password').notEmpty().withMessage("Password must be provided!"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
