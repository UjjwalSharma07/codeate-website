const express = require('express');
const router = express.Router();

const {addMentor, getAllMentors} = require('../controllers/mentor')

// add a new mentor 
router.post('/mentor', addMentor);

// get all mentors
router.get('/mentors', getAllMentors);


module.exports = router;