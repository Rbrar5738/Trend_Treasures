const userService = require("../services/user.service");
const bcrypt = require("bcryptjs");

const getUserProfile = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];

    if (!jwt) {
      return res.status(404).send({ error: "token not found" });
    }
    const user = await userService.getUserProfileByToken(jwt);

    return res.status(200).send(user);
  } catch (error) {
    // console.log("error from controller - ",error)
    console.log("here", error);
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  // console.log("here");
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  // console.log("here1111", req.body);
  try {
    const jwt = req.headers.authorization?.split(" ")[1];

    if (!jwt) {
      return res.status(404).send({ error: "token not found" });
    }

    const { firstName, lastName, email, currentPassword, newPassword } =
      req.body;

    // Get the user profile by JWT
    const user = await userService.getUserProfileByToken(jwt);
    // console.log("user meeeeeeeeee", user);

    // Verify current password
    // const isMatch = await bcrypt.compare(currentPassword, user.password);
    // if (!isMatch) {
    //   return res.status(400).send({ error: "Current password is incorrect" });
    // }

    // Hash new password if provided
    let hashedPassword;
    if (newPassword) {
      hashedPassword = await bcrypt.hash(newPassword, 8);
    }

    // Update user profile
    const updatedUser = await userService.updateUserProfile(user.id, {
      firstName,
      lastName,
      email,
      password: hashedPassword ? user.password : user.password,
    });

    return res.status(200).send(updatedUser);
  } catch (error) {
    console.log("here", error);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { getUserProfile, getAllUsers, updateUserProfile };
