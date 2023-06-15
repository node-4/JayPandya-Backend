// Packages
const express = require('express');

// Controllers
const { orderController } = require('../controllers/index');

// Middlewares
const protect = require('../middlewares/protect');
const restrictedTo = require('../middlewares/restrictedTo');

const { createOrder, orderStatus, getAllOrders, getOrder, cancelOrder } =
  orderController;

// Router Initialization
const router = express.Router();

router.route('/').get(getAllOrders)
// Protect All Routes
router.use(protect);

// Get All Orders Route
// Create Order Route
router.route('/').post(createOrder);

// Get Order Route
// Cancel Order Route
router.route('/:id').get(getOrder).delete(cancelOrder);

// Update Order Status
router.patch('/:id', restrictedTo('admin'), orderStatus);

module.exports = router;
