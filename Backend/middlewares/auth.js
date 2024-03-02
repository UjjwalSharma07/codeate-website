const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET

//  utils
const ErrorHandler = require("../utils/errorHandler");

// check if users is authenticated or not
exports.isAuthenticated = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.headers.authorization.replace("Bearer ", "");

    if (!token)
      return next(new ErrorHandler("Login First to Access this Resource", 401));
    //   return next(new ErrorHandler("Login First to Access this Resource", 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// handling user roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new ErrorHandler(`${req.user.role} Access Denied`, 403));

    next();
  };
};


/** auth middleware */
exports.Auth = async(req, res, next) =>{
    try {
        
        // access authorize header to validate request
        const token = req.headers.authorization.split(" ")[1];

        // retrive the user details fo the logged in user
        const decodedToken = await jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;

        next()

    } catch (error) {
        res.status(401).json({ error : "Authentication Failed!"})
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
}


exports.localVariables = (req, res, next) =>{
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}
