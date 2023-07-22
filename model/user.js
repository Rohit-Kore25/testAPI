//jshint esversion:6
//this is a test user model

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email:String,
  password:String
});

module.exports = new mongoose.model('user',userSchema);
