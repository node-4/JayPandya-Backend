// Packages
const express = require('express');
const multer = require('multer');
const { productController } = require('../controllers/index');
//const protect= require('../middlewares/protect');
const { anyMulter } = require('../utils/multer');
const reviewRoute = require('./review.route');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file)
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    cb(null, file.originalname);

  }
});
const upload = multer({ storage: storage });








const {
  getAllProducts,
  getProduct,
  addProduct,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  UploadProductExcal,
  getAllProduct
} = productController;

const router = express.Router();

router.use('/:productId/reviews', reviewRoute);

router.get('/top-5-cheap', getAllProducts, top5Cheap);

router.get('/product-stats', productStats);

router.get('/filter', getAllProducts);

router.get('/:productId', getProduct);

//router.use(protect);

router
  .route('/color/:productId')
  .post(addProductColor)
  .delete(deleteProductColor);

router.route('/size/:productId').post(addProductSize).delete(deleteProductSize);

router.post('/', anyMulter(), addProduct);

router.patch('/:productId/details', updateProductDetails);

router.patch('/:productId/main-image', anyMulter(), updateProductMainImage);

router.patch('/:productId/images', anyMulter(), updateProductImages);

router.delete('/:productId', deleteProduct);

router.post('/add', upload.single('file'), UploadProductExcal)

router.get('/', getAllProduct)
module.exports = router;
