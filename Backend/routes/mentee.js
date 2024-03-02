const express = require('express');
const router = express.Router();

const {addMentee, getAllMentees} = require('../controllers/mentee')

// add a new mentor 
router.post('/mentee', addMentee);

// get all mentors
router.get('/mentees', getAllMentees);


module.exports = router;