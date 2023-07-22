//jshint esversion: 8
//controllers contain the controlling functions ka detail code whose names we write in appRoutes
//this is a collection of all API functions

//import your model here:
const User = require('../model/user.js');


//sample test function
async function test(req,res){

  console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;

  let student;

  try{
    student = await User.findOne({email:email});
  }catch(err){
    console.log(err);
  }

  console.log(student);

  if(!student){
    return res.status(404).json({message:'No such user exists'});
  }else{
    if(student.password === password){
      return res.status(200).json({message:'Welcome back!'});
    }else{
      return res.status(401).json({message:'Wronng password!'});
    }
  }
}


//export all functions when done!
exports.test = test;
