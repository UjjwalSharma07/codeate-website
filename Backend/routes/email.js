const express = require('express');
const sendMail = require('../controllers/sendMail'); // Import your email sending logic

const router = express.Router();

router.post('/sendmail', sendMail);

module.exports = router;