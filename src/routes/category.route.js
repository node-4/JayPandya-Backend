// Packages
const express = require('express');

// Middlewares
const protect = require('../middlewares/protect');

// Controllers
const { categoryController } = require('../controllers/index');

// Utils
const { singleFile } = require('../utils/multer');


const {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} = categoryController;

// Router Initialization
const router = express.Router();

// Get All Categories Route
router.get('/', getAllCategories);

// Get Category Route
router.get('/:id', getCategory);

// Protect All Next Routes
//router.use(protect.);

// Add Category (Multer Middleware) Route
router.post('/', singleFile('image'), addCategory);

// Update Category details Route
// Delete Category Route
router.route('/:id').patch(updateCategoryDetails).delete(deleteCategory);

// Update Category Image (Multer Middleware) Route
router.patch('/:id/image', singleFile('image'), updateCategoryImage);

module.exports = router;
