const mongoose = require('mongoose');

const helpAndSupport = mongoose.Schema({
    name: {
        type: String
    },
    message: {
        type: String
    }
})


const Help = mongoose.model('helpandSupport', helpAndSupport);

module.exports = Help;