const userService = require("../services/userService");
const cartService = require("../services/cartService");
const cartItemModel = require("../models/cartItemModel");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Cart Item not found:", cartItemId);
    }
    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error("User not found:", userId);
    }
    if (user._id.toString() == userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You cant update this cart item");
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);
}

module.exports = {
  updateCartItem,
};
