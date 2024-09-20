comst brcrypt=require("bcrypt");
const User=require("../models/userModel");
const createUser=async(userData)=>{
  try{
    let {firstName, lastName, email, password}=userData;
    const isUserExist=await User.findOne({email});
    if(isUserExist){
      throw new Error("User already exist with email:",email);
    }
    password=await bcrypt.hash(password,10);
  }
  catch(err){
    console.log(err);
  }

}