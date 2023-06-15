// Packages
const express = require('express');

// Middlewares
const protect = require('../middlewares/protect');
const restrictedTo = require('../middlewares/restrictedTo');
// Controllers
const {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} = require('../controllers/user.controller');

// Utils
const { singleFile } = require('../utils/multer');


// Router Initialization
const router = express.Router();

// Get All Users Route
router.get('/', getUsers);

// Get User Route
router.get('/:id', getUser);

// Protect All Next Routes
//router.use(protect);

// Create New User (Multer Middleware) Route
router.post('/', restrictedTo('admin'), singleFile('image'), createUser);

// Update User Details Route
router.patch('/update-details', updateUserDetails);

// Update User Profile Image (Multer Middleware) Route
router.patch(
  '/update-profile-image',
  singleFile('image'),
  updateUserProfileImage
);

// Delete LoggedIn User Account Route
router.delete('/me/:id', deleteMyAccount);

// Delete User Route
router.delete('/:id', deleteUser);

module.exports = router;
