const mongoose = require('mongoose');


const bannerSchema = mongoose.Schema({
    description: {
        type: String,
    },
    image: []
})

const Banner = mongoose.model('banners', bannerSchema);

module.exports = Banner