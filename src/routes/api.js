const express = require("express");
const { Hello } = require("../controller/HelloController");

const router = express.Router(); // Fixed typo from 'Route' to 'Router'

// TODO: This is my first GET routing
router.get("/hello", Hello); // Added leading slash for the route path

module.exports = router; // Fixed export to use 'module.exports'
