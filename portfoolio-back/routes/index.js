const express = require("express");
const router = new express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/reviews", reviewController.reviewHome);
router.post("/reviewup", reviewController.createReview);
router.patch("/reviewchange/:id", reviewController.updateReview);
router.delete("/reviewdown/:id", reviewController.deleteReview);

module.exports = router;
