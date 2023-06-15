const express = require('express');

// Controllers 
const { notifyController } = require('../controllers');


const {
    addnotification,
    getnotification,
    updatenotification,
    deletenotification
} = notifyController


const router = express.Router();


router.route('/').get(getnotification).post(addnotification);
router.route('/:id').patch(updatenotification).delete(deletenotification)


module.exports = router;


