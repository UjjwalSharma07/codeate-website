// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res, message) => {
  // create token
  const token = user.getJwtToken();

  //  options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // save token in the cookie {key : 'token'  && value : value of token}
  // console.log(token);
  res.cookie("token", token, options);
  return res.status(statusCode).json({
    success: true,
    message,
    token,
    user,
  });
};

module.exports = sendToken;
