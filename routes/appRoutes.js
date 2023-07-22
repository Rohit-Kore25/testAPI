//jshint esversion:6
//this is step 2 of doing all stuff.

const express = require('express');
const router = express.Router();

//import your Controller here!
const appController = require('../controller/appController.js');

//All routes here

//the post section
router.post('/test', appController.test);


//export the router
module.exports = router;
