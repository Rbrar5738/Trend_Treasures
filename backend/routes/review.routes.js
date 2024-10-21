const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.post("/create", authenticate, reviewController.createReview);
router.get("/product/:priductId", authenticate, reviewController.getAllReviews);

module.exports = router;
