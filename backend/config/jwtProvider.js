const jwt = require("jsonwebtoken");
require("dotenv").config();

//Generating token
const generateToken = (userId) => {
  const SECRET = "Ravinder Singh";
  const token = jwt.sign({ userId }, SECRET, {
    expiresIn: "48h",
  });
  return token;
};

//Get id by tiken
const getUserIdByToken = (token) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  return decodedToken.userId;
};
module.exports = { generateToken, getUserIdByToken };
