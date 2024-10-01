const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = "Ravinder Singh";

//Generating token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET, {
    expiresIn: "48h",
  });
  return token;
};

//Get id by tiken
const getUserIdByToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET);
  return decodedToken.userId;
};
module.exports = { generateToken, getUserIdByToken };
