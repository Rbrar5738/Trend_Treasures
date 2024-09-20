const Cart = require("../models/cartModel");

//Creating cart for user on registration
const createcart = async (user) => {
  try {
    const cart = await Cart.create(user);
    return cart;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
};
module.exports = {
  createcart,
};
