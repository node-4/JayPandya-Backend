const express = require('express');

// Controllers 
const { termControllers } = require('../controllers');


const {
  addTerms,
  getTerms,
  updateTerms,
  deleteTerms
} = termControllers;


const router = express.Router();


router.route('/').get(getTerms).post(addTerms);
router.route('/:id').patch(updateTerms).delete(deleteTerms)


module.exports = router;


