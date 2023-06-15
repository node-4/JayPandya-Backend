const { signin, signup, logout, refreshAuth, resetPassword, verifyEmail, changePassword } = require('./auth.service')
const { createBanner, getAllBanner, BannerfindId, deleteBannerById, updateBannerDetails, } = require('./banner_service');
const { AddTerms, getTerms, updateTerms, DeleteTerms } = require('./terms');
const { createReview, queryReviews, queryReviewById, updateReview, deleteReview } = require('./review.service');
const { createUser, queryUsers, queryUser, updateUserDetails, updateUserProfileImage, deleteUser, deleteMyAccount } = require('./user.service');

const { createCategory, queryCategories, queryCategory, updateCategoryDetails, updateCategoryImage, deleteCategoryById, getCategryBySelleId } = require('./category.service');

const { queryProducts, queryProductById, createProduct, updateProductDetails, addProductColor, addProductSize, deleteProductColor, deleteProductSize, updateProductMainImage, updateProductImages, deleteProduct, getProductStats, createProductExcel, allProduct } = require('./product.service');

const { addProductToCart, reduceByOne, increaseByOne, queryCart, deleteCart, deleteItem } = require('./cart.service');

const { createOrder, orderStatus, queryOrders, queryOrder, cancelOrder } = require('./order.service');

const { getAllDiscountCodes, getDiscount, verifyDiscountCode, generateDiscountCode, deleteDiscountCode, cancelDiscountCode } = require('./discount.service');

const { addFavoriteProduct, getFavoriteList, deleteProductFromFavorite, checkProductInFavoriteList } = require('./favorite.service');


const { Addprivacy, getprivacy, updateprivacy, Deleteprivacy } = require('./privacy.service');


const { Addnotification, getnotification, updatenotification, Deletenotification } = require('./notification.service');

const authService = { signin, signup, logout, refreshAuth, resetPassword, verifyEmail, changePassword };

const reviewService = {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
};

const userService = {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
};

const categoryService = {
  createCategory,
  queryCategories,
  queryCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById,
  getCategryBySelleId
};

const productService = {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats,
  createProductExcel,
  allProduct
};

const cartService = {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
};

const orderService = {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder
};

const discountService = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteService = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

const termsService = {
  AddTerms,
  getTerms,
  updateTerms,
  DeleteTerms
}

const privacyService = {
  Addprivacy,
  getprivacy,
  updateprivacy,
  Deleteprivacy
}

const notifyService = {
  Addnotification,
  getnotification,
  updatenotification,
  Deletenotification
}

const BannerService = {
  createBanner,
  getAllBanner,
  BannerfindId,
  deleteBannerById,
  updateBannerDetails,
}

module.exports = {
  authService,
  userService,
  categoryService,
  productService,
  reviewService,
  cartService,
  orderService,
  discountService,
  favoriteService,
  termsService,
  privacyService,
  notifyService,
  BannerService
};
