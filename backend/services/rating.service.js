const Rating = require("../models/ratingModel");
const productService = require("../services/product.service.js");

async function createRating(req, user) {
  const product = await productService.findProductById(req.productId);
  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: req.rating,
    cretedAt: new Date(),
  });
  return await rating.save();
}

async function getAllRatings(productId) {
  return await Rating.find({ product: productId });
}
module.exports = { createRating, getAllRatings };
