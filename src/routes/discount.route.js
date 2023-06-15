// Packages
const express = require('express');

// Controllers
const { discountController } = require('../controllers');

// Middlewares
const protect = require('../middlewares/protect');
const restrictedTo = require('../middlewares/restrictedTo');

const {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} = discountController;

const router = express.Router();

router.use(protect);

router.post('/verify', verifyDiscountCode);

router.delete('/cancel', cancelDiscountCode);

router.get('/find/:code', getDiscount);

router.use(restrictedTo('admin'));

router.get('/', getAllDiscountCodes);

router.post('/generate', generateDiscountCode);

router.delete('/:id', deleteDiscountCode);

module.exports = router;





