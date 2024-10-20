const ratingService = require("../services/rating.service.js");
const createRating = async (req, res) => {
  const user = req.user;
  try {
    const rating = await ratingService.createRating(req.body.user);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  try {
    const rating = await ratingService.getAllRatings(productId);
    return res.status(201).send(rating);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createRating,
  getAllRatings,
};
