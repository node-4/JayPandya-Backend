// Utils
const catchAsync = require('../utils/catchAsync');

// Services
const { productService } = require('../services/index');

/**
 * @desc      Get All Products Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.query.sort - Sort returned data
 * @property  { String } req.query.select - Select specific fields
 * @property  { Number } req.query.page - Page number
 * @property  { Number } req.query.limit - Maximum number of products
 * @returns   { JSON } - A JSON object representing the type, message and the products
 */
const getAllProducts = catchAsync(async (req, res) => {
  let { page, sort, limit, select } = req.query;

  // 1) Setting default params
  if (!page) req.query.page = 1;
  if (!sort) req.query.sort = '';
  if (!limit) req.query.limit = 10;
  if (!select) req.query.select = '';

  // 1) Get all products
  const { type, message, statusCode, products } =
    await productService.queryProducts(req);

  // 2) Check if there is an error
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
    products
  });
});
/**
 * @desc      Get Product Using It's ID Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @returns   { JSON } - A JSON object representing the type, message, and the product
 */
const getProduct = catchAsync(async (req, res) => {
  // 1) Get product using it's ID
  const { type, message, statusCode, product } =
    await productService.queryProductById(req.params.productId);

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: message,
    product
  });
});
/**
 * @desc      Create New Product Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { Object } req.body - Body object data
 * @property  { Object } req.files - Product images
 * @property  { String } req.user.id - User ID
 * @returns   { JSON } - A JSON object representing the type, message and the product
 */
const addProduct = catchAsync(async (req, res) => {
  const { body, files } = req;
  console.log(files)

  // 1) Create product
  const { type, message, statusCode, product } =
    await productService.createProduct(body, files);

  // 2) Check if there is an error
  console.log(message)
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send data
  return res.status(statusCode).json({
    type,
    message: message,
    product
  });
});
/**
 * @desc      Add Product Color Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { String } req.body.color - Product color
 * @returns   { JSON } - A JSON object representing the type, message and the product
 */
const addProductColor = catchAsync(async (req, res) => {
  // 1) Add product color
  const { type, message, statusCode, color } =
    await productService.addProductColor(
      req.params.productId,
      req.user.id,
      req.body.color
    );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send product
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    color
  });
});
/**
 * @desc      Add Product Size Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { String } req.body.size - Product size
 * @returns   { JSON } - A JSON object representing the type, message and the product
 */
const addProductSize = catchAsync(async (req, res) => {
  // 1) Add product size
  const { type, message, statusCode, size } =
    await productService.addProductSize(
      req.params.productId,
      req.user.id,
      req.body.size
    );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send product
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    size
  });
});
/**
 * @desc      Update Product Details Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { Object } req.body - Body object data
 * @returns   { JSON } - A JSON object representing the type, message and the product
 */
const updateProductDetails = catchAsync(async (req, res) => {
  // 1) Update product details using it's ID
  const { type, message, statusCode, product } =
    await productService.updateProductDetails(
      req.params.productId,
      req.body
    );

  // 2) Check if there is an error
  if (type === 'Error') {
    return res.status(statusCode).json({
      type,
      message: req.polyglot.t(message)
    });
  }

  // 3) If everything is OK, send product
  return res.status(statusCode).json({
    type,
    message: req.polyglot.t(message),
    product
  });
});
/**
 * @desc      Update Product Main Image Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { Object } req.files - Product main image
 * @returns   { JSON } - A JSON object representing the type, message, and the product
 */
const updateProductMainImage = catchAsync(async (req, res) => {
  // 1) Update product main image using it's ID
  const { type, message, statusCode, product } =
    await productService.updateProductMainImage(
      req.params.productId,
      req.user.id,
      req.files
    );

  // 2) Check if there is an error
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
    product
  });
});
/**
 * @desc      Update Product Images Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { Object } req.files - Product sub images
 * @returns   { JSON } - A JSON object representing the type, message, and the product
 */
const updateProductImages = catchAsync(async (req, res) => {
  // 1) Update product images using it's ID
  const { type, message, statusCode, product } =
    await productService.updateProductImages(
      req.params.productId,
      req.user.id,
      req.files
    );

  // 2) Check if there is an error
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
    product
  });
});
/**
 * @desc      Delete Product Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @return    { JSON } - A JSON object representing the type and message
 */
const deleteProduct = catchAsync(async (req, res) => {
  // 1) Delete product using it's ID
  const { type, message, statusCode } = await productService.deleteProduct(
    req.params.productId,
  );

  // 2) Check if there is an error
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
 * @desc      Delete Product Color Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { String } req.body.color - Product color
 * @return    { JSON } - A JSON object representing the type and message
 */
const deleteProductColor = catchAsync(async (req, res) => {
  // 1) Delete product color
  const { type, message, statusCode } = await productService.deleteProductColor(
    req.params.productId,
    req.user.id,
    req.body.color
  );

  // 2) Check if there is an error
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
 * @desc      Delete Product Size Controller
 * @param     { Object } req - Request object
 * @param     { Object } res - Response object
 * @property  { String } req.params.productId - Product ID
 * @property  { String } req.user.id - Seller ID
 * @property  { String } req.body.size - Product size
 * @return    { JSON } - A JSON object representing the type and message
 */
const deleteProductSize = catchAsync(async (req, res) => {
  // 1) Delete product size
  const { type, message, statusCode } = await productService.deleteProductSize(
    req.params.productId,
    req.user.id,
    req.body.size
  );

  // 2) Check if there is an error
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
 * @desc    Get Top 5 Cheapeast Products Controller
 * @param   { Object } req - Request object
 * @param   { Object } res - Response object
 * @param   { Object } next - Next function
 */
const top5Cheap = catchAsync(async (req, res, next) => {
  // Limiting products to top 5 products
  // Sorting products according to it's price asc and according to ratings average des
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  next();
});
/**
 * Get all ProductData 
 */
const getAllProduct = catchAsync(async (req, res) => {
  console.log("Enter ")
  const stats = await productService.allProduct()
  return res.status(200).json({
    type: 'Success',
    stats
  })
})
/**
 * @desc    Get Products Statics Controller
 * @param   { Object } req - Request object
 * @param   { Object } res - Response object
 * @return  { JSON } - A JSON object representing the type, message and the stats
 */
const productStats = catchAsync(async (req, res) => {
  // 1) Get product stats
  const stats = await productService.getProductStats();

  // 2) If everything is OK, send data
  return res.status(200).json({
    type: 'Success',
    message: req.polyglot.t('productStatics'),
    stats
  });
});
const UploadProductExcal = catchAsync(async (req, res) => {
  const { file } = req; // get the uploaded file from the request object
  const fileName = file.originalname;
  console.log(file) // get the original file name
  console.log(`Uploading file: ${fileName}`);
  console.log("Enrter in controllers")
  const stats = await productService.createProductExcel(fileName);
  return res.status(200).json({
    type: 'Success',
    stats
  });
})
module.exports = { getAllProduct, top5Cheap, getAllProducts, getProduct, addProduct, productStats, updateProductDetails, addProductColor, addProductSize, deleteProductColor, deleteProductSize, updateProductMainImage, updateProductImages, deleteProduct, UploadProductExcal }
