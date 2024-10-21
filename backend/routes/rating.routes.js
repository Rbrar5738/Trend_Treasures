const express = require("express");
const router = express.Router();

const ratingController = require("../controllers/rating.controlle.js");
const authenticate = require("../middleware/authenticate.js");

router.post("/create", authenticate, ratingController.createRating);
router.get("/product/:priductId", authenticate, ratingController.getAllRatings);

module.exports = router;
