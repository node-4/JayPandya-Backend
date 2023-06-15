const {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword
} = require('./auth.controller');



const {
  addTerms,
  getTerms,
  updateTerms,
  deleteTerms
} = require('./terms');


const {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  UploadProductExcal,
  getAllProduct
} = require('./product.controller');

const {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} = require('./user.controller');

const {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} = require('./category.controller');

const {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} = require('./review.controller');

const {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
} = require('./cart.controller');

const {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder
} = require('./order.controller');

const {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} = require('./discount.controller');

const {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} = require('./favorite.controller');

const {
  addBanner,
  getAllBanners,
  DeleteBanner,
  BannerGetByID
} = require('./banner_Controller')



const {
  addprivacy,
  getprivacy,
  updateprivacy,
  deleteprivacy
} = require('./privacy.controller');


const {
  addnotification,
  getnotification,
  updatenotification,
  deletenotification
} = require('./notify.controller')

const {
  AddSupport,
  GetSupport,
  DeleSupport,
  UpdateSupport,
  AddHelp,
  GetHelp,
  DeleHelp,
  UpdateHelp,
} = require('./support_controller')



const authController = {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword
};

const userController = {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
};

const categoryController = {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
};

const productController = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  UploadProductExcal,
  getAllProduct
};

const reviewController = {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
};

const cartController = {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
};

const orderController = {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder
};

const discountController = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteController = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

const termControllers = {
  addTerms,
  getTerms,
  updateTerms,
  deleteTerms
}
const privactContrller = {
  addprivacy,
  getprivacy,
  updateprivacy,
  deleteprivacy
}

const notifyController = {
  addnotification,
  getnotification,
  updatenotification,
  deletenotification
}

const bannerController = {
  addBanner,
  getAllBanners,
  DeleteBanner,
  BannerGetByID
}

const supportAndHelp = {
  AddSupport,
  GetSupport,
  DeleSupport,
  UpdateSupport,
  AddHelp,
  GetHelp,
  DeleHelp,
  UpdateHelp,
}

module.exports = { authController, userController, productController, categoryController, reviewController, cartController, orderController, discountController, favoriteController, termControllers, privactContrller, notifyController, bannerController, supportAndHelp };
