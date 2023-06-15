// Packages
const mongoose = require('mongoose');

// Plugins
const toJSON = require('./plugins/index');


const favoriteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
);

// add plugin that converts mongoose to json
favoriteSchema.plugin(toJSON);

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
