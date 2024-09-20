const userService = require("../services/userService");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");
const cartService = require("../services/cartService");

//Register a new user
const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);
    await cartService.ccreateCart(user);
    return res.status(200).send({ jwt, message: "registered successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

//Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found with email:", email });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid Password" });
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
