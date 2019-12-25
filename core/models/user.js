const crypto = require('crypto');
const { Schema, model } = require('mongoose');


const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: crypto.randomBytes(48).toString('hex')
    },
});

module.exports = model('User', schema);