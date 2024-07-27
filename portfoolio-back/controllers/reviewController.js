const Review = require("../models/review");

exports.reviewHome = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
};

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json(review);
    console.log(review.name);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    const updates = Object.keys(req.body);
    updates.forEach((update) => (review[update] = req.body[update]));
    await review.save();
    res.json(review);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      res.status(404).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
