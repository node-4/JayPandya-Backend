// Packages
const mongoose = require('mongoose');

// Plugins
const toJSON = require('./plugins/index');


const sizeSchema = mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
      }
    ],
    size: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
sizeSchema.plugin(toJSON);

const Size = mongoose.model('Size', sizeSchema);

module.exports = Size;
