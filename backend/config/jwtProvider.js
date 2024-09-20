const jwt = require("jsonwebtoken");
//Generating token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "48h",
  });
  return token;
};

//Get id by tiken
const getUserIdByToken = (token) => {
  const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
  return decodedToken.userId;
};
module.exports = { generateToken, getUserIdByToken };
