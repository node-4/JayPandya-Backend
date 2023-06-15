const {
  signUp,
  signIn,
  logout,
  generateTokens,
  forgotPassword,
  resetPassword,
  changePassword
} = require('./auth.swagger');

const {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} = require('./category.swagger');

const {
  getAllProducts,
  getProduct,
  addProduct,
  top5Cheap,
  productStats,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  getAllProduct
} = require('./product.swagger');

const {
  getCart,
  addItemsToCart,
  increaseProductQuantityByOne,
  reduceProductQuantityByOne,
  deleteProductFromCart,
  deleteCart
} = require('./cart.swagger');

const {
  getAllProductReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} = require('./review.swagger');

const {
  getAllUsers,
  getUser,
  addUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} = require('./user.swagger');

const {
  createNewOrder,
  getAllOrders,
  getOrder,
  orderStatus,
  cancelOrder
} = require('./order.swagger');

const {
  addFavoriteProduct,
  deleteProductFromFavorite,
  checkProductInFavoriteList,
  getFavoriteList
} = require('./favorite.swagger');

const {
  verifyDiscountCode,
  getDiscount,
  getAllDiscountCodes,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} = require('./discount.swagger');

const docs = {
  openapi: '3.0.3',
  info: {
    title: 'Ecommerce API',
  },
  servers: [
    {
      url: "",
      description: 'Production Server'
    },
    {
      url: 'http://localhost:3000/api',
      description: 'Development Server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        in: 'header',
        bearerFormat: 'JWT'
      }
    }
  },
  security: [
    {
      jwt: []
    }
  ],
  paths: {
    '/auth/login': {
      post: signIn
    },
    '/auth/register': {
      post: signUp
    },
    '/auth/logout': {
      post: logout
    },
    '/auth/tokens': {
      post: generateTokens
    },
    '/auth/forgot-password': {
      post: forgotPassword
    },
    '/auth/reset-password': {
      post: resetPassword
    },
    '/auth/change-password': {
      patch: changePassword
    },
    '/user': {
      get: getAllUsers,
      post: addUser
    },
    '/user/{userId}': {
      get: getUser,
      delete: deleteUser
    },
    '/user/update-details': {
      patch: updateUserDetails
    },
    '/user/update-profile-image': {
      patch: updateUserProfileImage
    },
    '/user/me': {
      delete: deleteMyAccount
    },
    '/category': {
      get: getAllCategories,
      post: addCategory
    },
    '/category/{categoryId}': {
      get: getCategory,
      patch: updateCategoryDetails,
      delete: deleteCategory
    },
    '/category/{categoryId}/image': {
      patch: updateCategoryImage
    },
    '/product': {
      //  get: getAllProducts,
      post: addProduct,
      get: getAllProduct
    },
    '/product/filter': {
      get: getAllProducts,
    },
    '/product/{productId}': {
      get: getProduct,
      delete: deleteProduct
    },
    '/product/top-5-cheap': {
      get: top5Cheap
    },
    '/product/product-stats': {
      get: productStats
    },
    '/product/{productId}/details': {
      patch: updateProductDetails
    },
    '/product/{productId}/main-image': {
      patch: updateProductMainImage
    },
    '/product/{productId}/images': {
      patch: updateProductImages
    },
    '/product/color/{productId}': {
      post: addProductColor,
      delete: deleteProductColor
    },
    '/product/size/{productId}': {
      post: addProductSize,
      delete: deleteProductSize
    },
    '/favorite': {
      get: getFavoriteList,
      post: addFavoriteProduct
    },
    '/favorite/{productId}': {
      delete: deleteProductFromFavorite
    },
    '/favorite/check/{productId}': {
      get: checkProductInFavoriteList
    },
    '/discount': {
      get: getAllDiscountCodes
    },
    '/discount/verify': {
      post: verifyDiscountCode
    },
    '/discount/cancel': {
      delete: cancelDiscountCode
    },
    '/discount/find': {
      get: getDiscount
    },
    '/discount/generate': {
      post: generateDiscountCode
    },
    '/discount/{discountId}': {
      delete: deleteDiscountCode
    },
    '/cart': {
      get: getCart,
      post: addItemsToCart,
      delete: deleteCart
    },
    '/cart/increase-one': {
      patch: increaseProductQuantityByOne
    },
    '/cart/reduce-one': {
      patch: reduceProductQuantityByOne
    },
    '/cart/:productId': {
      delete: deleteProductFromCart
    },
    '/order': {
      get: getAllOrders,
      post: createNewOrder
    },
    '/order/{orderId}': {
      get: getOrder,
      patch: orderStatus,
      delete: cancelOrder
    },
    '/product/{productId}/reviews': {
      get: getAllProductReviews,
      post: addReview
    },
    '/product/{productId}/reviews/{reviewId}': {
      get: getReview,
      patch: updateReview,
      delete: deleteReview
    }
  }
};

module.exports = docs;
