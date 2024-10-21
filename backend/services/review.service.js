const Review = require("../models/reviewModel");
const productService = require("../services/product.service.js");

async function createReview(reqData, user) {
  const product = await productService.findProductById(reqData.productId);

  const review = new Review({
    user: user._id,
    product: reqData.productId,
    review: reqData.review,
    createdAt: new Date(),
  });
  await review.save();
  return await review.save();
}


async function getAllReviews(productId,reqData) {
  const product = await productService.findProductById(reqData.productId);
  return await Review.find({ product: product._id });
} 

module.exports = {
  createReview,
  getAllReviews
};