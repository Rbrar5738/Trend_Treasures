const Cart = require("../models/cartModel");
const CartItem = require("../models/cartItemModel");
const Product = require("../models/productModel");
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

async function findUserCart(userId) {
  try {
    const cart = await Cart.findOne({ userId });
    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;
    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItems = 0;
    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItems += cartItem.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.disscount = totalPrice - totalDiscountedPrice;
    cart.totalItems = totalItems;
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addCartItem(userId, req) {
  try {
    let cart = await findUserCart(userId);
    const product = await Product.findById(req.productId);
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: req.productId,
      userId,
    });
    if (!isPresent) {
      const cartItem = new CartItem.create({
        product: product._id,
        cart: cart._id,
        userId,
        quantity: 1,
        price: product.price,
        discountedPrice: product.discountedPrice,
        size: req.size,
      });
      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return "Item added to Cart!";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = {
  createcart,
  findUserCart,
  addCartItem,
};
