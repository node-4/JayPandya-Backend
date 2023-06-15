// Packages
const mongoose = require('mongoose');

// Plugins
const toJSON = require('./plugins/index');


const colorSchema = mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
      }
    ],
    color: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
colorSchema.plugin(toJSON);

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
