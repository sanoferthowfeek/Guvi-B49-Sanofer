const mongoose = require('mongoose');
const shortId = require('shortid');

const shortulrschema = new mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Shorturl', shortulrschema);