const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderItems",
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "addresses",
  },
  paymentDetails: [
    {
      paymentMethos: {
        type: String,
      },
      transactionId: {
        type: String,
      },
      paymentId: {
        type: String,
      },
      paymentDetails: {
        type: String,
      },
      paymentStatus: {
        type: String,
        defult: "Pending",
      },
    },
  ],

  totalItems: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
