const jwtProvider = require("../config/jwtProvider.js");
const userService = require("../services/userService.js");
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(404).json({ message: "Token not found" });
    }
    const userId = jwtProvider.getUserIdByToken(token);
    const user = userService.findUserById(userId);
    req.user = user;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  next();
};
module.exports = authenticate;
