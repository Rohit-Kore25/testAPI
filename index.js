//jshint esversion:6

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//importing the router -> done after writing this module
//setup controller after importing the router
const router = require('./routes/appRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());

const password = process.env.PASSWORD;

const url = "mongodb+srv://RohitKore1425:" + password + "@cluster0.qka5f.mongodb.net/Sample?retryWrites=true&w=majority";

try{
  mongoose.connect(url);
  console.log("Database connected successfully");
}catch(err){
  console.log(err);
}

app.use('/api',router);

const port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log(`Server started on ${port}`);
});
