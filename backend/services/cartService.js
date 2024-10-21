const Cart = require("../models/cartModel");
const CartItem=require("../models/cartItemModel");
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
    let ccartItems=await CartItem.find({cart:cart._id}).populate("product");
}
catch(error)
{

}
}
module.exports = {
  createcart,
};
9