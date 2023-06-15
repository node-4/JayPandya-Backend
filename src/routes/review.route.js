// Packages
const express = require('express');

// Middlewares
const protect = require('../middlewares/protect');

// Controllers
const { reviewController } = require('../controllers/index');

const { getAllReviews, getReview, addReview, updateReview, deleteReview } =
  reviewController;

// Router Initialization
const router = express.Router({ mergeParams: true });

// Get All Reviews Route
router.get('/', getAllReviews);

// Get Review Route
router.get('/:reviewId', getReview);

// Protect All Routes
router.use(protect);

// Add Review Route
router.post('/', addReview);

// Update Review Route
// Delete Review Route
router.route('/:reviewId').patch(updateReview).delete(deleteReview);

module.exports = router;
