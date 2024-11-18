// const productController = require("../controllers/product.controller.js");
const express = require("express");
const { createOrder, capturePayment } = require("../controllers/paypal");
// const { createOrder, capturePayment } = require('./paypal');

const router = express.Router();

router.post("/create-order/:id", async (req, res) => {
  const orderId = req.params.id;
  const order = await createOrder(orderId);
  if (order) {
    res.json({ id: order.id });
  } else {
    res.status(500).send("Error creating order");
  }
});

router.post("/capture-payment", async (req, res) => {
  const { orderId } = req.body;
  const capture = await capturePayment(orderId);
  if (capture) {
    res.json(capture);
  } else {
    res.status(500).send("Error capturing payment");
  }
});
module.exports = router;
