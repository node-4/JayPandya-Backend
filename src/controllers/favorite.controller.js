// Utils
const catchAsync = require('../utils/catchAsync');

// Services
const { favoriteService } = require('../services');

/**
 * @desc      Get product's favorite list controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String }  req.user.id - User ID
 * @returns   { JSON } - A JSON object representing the type, message and the favorite list
 */
const getFavoriteList = catchAsync(async (req, res) => {
  // 1) Calling addFavoriteProduct service
  const { type, message, statusCode, favorite } =
    await favoriteService.getFavoriteList(req.user.id);

  // 2) Check if something went wrong
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    favorite: favorite
  });
});

/**
 * @desc      Add product to favorite list controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.body.productId - Product ID
 * @property  { String }  req.user.id - User ID
 * @returns   { JSON } - A JSON object representing the type and message
 */
const addFavoriteProduct = catchAsync(async (req, res) => {
  // 1) Calling addFavoriteProduct service
  const { type, message, statusCode } =
    await favoriteService.addFavoriteProduct(req.user.id, req.body.productId);

  // 2) Check if something went wrong
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message)
  });
});

/**
 * @desc      delete product from favorite list controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.id - Product ID
 * @property  { String }  req.user.id - User ID
 * @returns   { JSON } - A JSON object representing the type and message
 */
const deleteProductFromFavorite = catchAsync(async (req, res) => {
  // 1) Calling deleteProductFromFavorite service
  const { type, message, statusCode } =
    await favoriteService.deleteProductFromFavorite(req.user.id, req.params.id);

  // 2) Check if something went wrong
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message)
  });
});

/**
 * @desc      Check if product in favorite list controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response
 * @property  { String } req.params.id - Product ID
 * @property  { String }  req.user.id - User ID
 * @returns   { JSON } - A JSON object representing the type and message
 */
const checkProductInFavoriteList = catchAsync(async (req, res) => {
  // 1) Calling checkProductInFavoriteList service
  const { type, message, statusCode } =
    await favoriteService.checkProductInFavoriteList(
      req.user.id,
      req.params.id
    );

  // 2) Check if something went wrong
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message)
  });
});
module.exports = { addFavoriteProduct, getFavoriteList, deleteProductFromFavorite, checkProductInFavoriteList }
