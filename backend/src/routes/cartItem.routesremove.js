const express = require("express");
const authenticate = require("../middleware/authenticat.js");
const router = express.Router();

const cartItemController = require("../controllers/cartItem.controller.js");

router.delete(
  "/removeall",
  authenticate,
  cartItemController.removeAllCartItems
);

module.exports = router;
