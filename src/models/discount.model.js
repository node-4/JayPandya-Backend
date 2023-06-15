const mongoose = require('mongoose');
const toJSON = require('./plugins/index');


const discountSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true
    },
    discount: {
      type: String,
      required: true
    },
    available: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
discountSchema.plugin(toJSON);

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
