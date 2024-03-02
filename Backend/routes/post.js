const express = require('express');
const router = express.Router();

const {addPost, getPosts} = require('../controllers/post')

// add a new post : admin (later)
router.post('/post', addPost);

// get all post
router.get('/posts', getPosts);


module.exports = router;