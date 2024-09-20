const brcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwtProvider = require("../config/jwtProvider");
const jwt = require("jsonwebtoken");

//Create a new User
const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist with email:", email);
    }
    password = await bcrypt.hash(password, 10);
    const user = await User.create({ firstName, lastName, email, password });
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

//Find user by id
const findUserById = async (userId) => {
  try {
    const user = await User.findUserById(userId).populate("address");
    if (!user) {
      throw new Error("User not found with id:", userId);
    }
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

//Find user by email
const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with email:", email);
    }
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

//Get user by Token
const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdByToken(token);
    const user = await User.findOne(userId);
    if (!user) {
      throw new Error("User not found with Id:", userId);
    }
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

//
module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
  getUserProfileByToken,
};
