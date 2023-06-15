const mongoose = require('mongoose');

const privacy = mongoose.Schema({
    Privacy: {
        type: String
    },
})

const Privacy = mongoose.model('privacy', privacy);

module.exports = Privacy