const userService = require("../services/userService");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");
const cartService = require("../services/cartService");
const User = require("../models/userModel");

//Register a new user
// const register = async (req, res) => {
//   try {
//     const user = await userService.createUser(req.body);
//     const jwt = jwtProvider.generateToken(user._id);
//     // await cartService.createcart(user);
//     return res.status(200).send({ jwt, message: "registered successfully" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Email already exists" });
//   }

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const jwtToken = jwtProvider.generateToken(user._id);
    // await cartService.createCart(user);

    return res
      .status(201)
      .json({ jwt: jwtToken, message: "Registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

//Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }
    const jwt = jwtProvider.generateToken(user._id);

    return res.status(200).send({ jwt, message: "Login Success" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  register,
  login,
};
