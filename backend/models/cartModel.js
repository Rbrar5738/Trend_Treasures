const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  cartItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  totalDiscountedPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  discount: {
    type: Number,
    required: true,
    default: 0,
  },
});
const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
