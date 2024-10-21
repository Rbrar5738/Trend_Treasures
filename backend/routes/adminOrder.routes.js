const express = require("express");
const router = express.Router();

const orderController = require("../controllers/adminOrder.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, orderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, orderController.confirmedOrder);
router.put("/:orderId/ship", authenticate, orderController.shippOrder);
router.put("/:orderId/deliver", authenticate, orderController.delivereOrders);
router.put("/:orderId/cancel", authenticate, orderController.cancelledOrders);
router.put("/:orderId/delete", authenticate, orderController.deleteOrder);

module.exports = router;
