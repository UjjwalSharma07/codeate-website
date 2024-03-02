const express = require('express');
const router = express.Router();

const {addTestimonial, getAllTestimonials} = require('../controllers/testimonial')

// add a new mentor 
router.post('/testimonial', addTestimonial);

// get all mentors
router.get('/testimonials', getAllTestimonials);


module.exports = router;