const express = require('express');

// Controllers 
const { privactContrller } = require('../controllers');


const {
    addprivacy,
    getprivacy,
    updateprivacy,
    deleteprivacy
} = privactContrller;


const router = express.Router();


router.route('/').get(getprivacy).post(addprivacy);
router.route('/:id').patch(updateprivacy).delete(deleteprivacy)


module.exports = router;


