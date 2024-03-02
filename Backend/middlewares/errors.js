const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
  
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({
        success:  false,
        message: err.message || 'Internal Server Error',
        // error: {
        //     statusCode : err.statusCode,
        //     message : err.message,
        //     description: err.stack
        // }
    })

  
}
