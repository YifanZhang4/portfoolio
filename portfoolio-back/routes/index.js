const express = require("express");
const router = new express.Router();
const reviewController = require("../controllers/reviewController");
const pastpController = require("../controllers/pastprojController");

router.get("/reviews", reviewController.reviewHome);
router.post("/reviewup", reviewController.createReview);
router.patch("/reviewchange/:id", reviewController.updateReview);
router.delete("/reviewdown/:id", reviewController.deleteReview);
router.get("/pastprojects", pastpController.pastpHome);
router.post("/pastprojectsup", pastpController.createPastP);
router.patch("/pastprojectschange/:id", pastpController.updatePastP);
router.delete("/pastprojectsdown/:id", pastpController.deletePastP);

module.exports = router;
