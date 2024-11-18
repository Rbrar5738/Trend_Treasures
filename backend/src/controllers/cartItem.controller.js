const cartItemService = require("../services/cartItem.service.js");
async function updateCartItem(req, res) {
  const user = req.user;
  // console.log(req.param.id);

  try {
    const updatedCartItem = await cartItemService.updateCartItem(
      user._id,
      req.params.id,
      req.body
    );

    return res.status(200).send(updatedCartItem);
  } catch (err) {
    console.log("error", err.message);
    return res.status(500).json({ error: err.message });
  }
}

async function removeCartItem(req, res) {
  const user = req.user;

  // console.log(user._id, "userId");

  try {
    await cartItemService.removeCartItem(user._id, req.params.id);

    return res.status(200).send({ message: "item removed", status: true });
  } catch (err) {
    console.log("error", err.message);
    return res.status(500).json({ error: err.message });
  }
}

async function removeAllCartItems(req, res) {
  const userId = req.user;
  try {
    // Remove all cart items associated with the given userId
    const result = await cartItemService.removeAllCartItems(userId);

    // Return result if necessary, like how many documents were deleted
    return result;
  } catch (err) {
    throw new Error("Error removing all cart items: " + err.message);
  }
}

module.exports = { updateCartItem, removeCartItem, removeAllCartItems };
