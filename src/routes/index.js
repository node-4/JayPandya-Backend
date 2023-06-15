const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const productRoute = require('./product.route');
const categoryRoute = require('./category.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');
const discountRoute = require('./discount.route');
const favoriteRoute = require('./favorite.route');
const termsRoute = require('./terms.route');
const privacy = require('./privacy.route');
const notify = require('./notify.route');
const banner = require('./banner_route');
const support = require('./support');
const router = express.Router();
router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/category', categoryRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);
router.use('/discount', discountRoute);
router.use('/favorite', favoriteRoute);
router.use('/terms', termsRoute)
router.use('/privacy', privacy)
router.use('/notify', notify)
router.use('/banner', banner);
router.use('/', support)

module.exports = router;
