const express = require("express");
const { Hello } = require("../controller/HelloController");

//TODO Fixed typo from 'Route' to 'Router'
const router = express.Router();

// TODO: This is my first GET routing
router.get("/hello", Hello);

//TODO Fixed export to use 'module.exports'
module.exports = router;
