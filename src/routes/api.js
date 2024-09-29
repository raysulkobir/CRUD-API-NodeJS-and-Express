const express = require("express");
const { Hello } = require("../controller/HelloController");
const postController = require('../controller/PostController');

//TODO Fixed typo from 'Route' to 'Router'
const router = express.Router();

// TODO: This is my first GET routing
router.get("/hello", Hello);

router.get('/posts', postController.getPosts);
// POST /feed/post will be handled right now
router.post('/post', postController.createPost);

//TODO Fixed export to use 'module.exports'
module.exports = router;
