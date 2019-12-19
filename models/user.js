const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    male: {
        type: Number,
        required: false,
        default: 0
    }
});

module.exports = model('User', schema);