const express = require("express");
const router = new express.Router();
const reviewController = require("../controllers/reviewController");
const tagController = require("../controllers/tagController");

router.get("/reviews", reviewController.reviewHome);
router.post("/reviewup", reviewController.createReview);
router.patch("/reviewchange/:id", reviewController.updateReview);
router.delete("/reviewdown/:id", reviewController.deleteReview);
router.post("/tagup", tagController.createTag);
router.delete("/tagdown/:id", tagController.deleteTag);

module.exports = router;
