const crypto = require('crypto');
const { Schema, model } = require('mongoose');


const schema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        index: true,
        default: new Date(0)
    },
    amount: {
        type: Number,
        default: 4
    },
    is_playing: {
        type: Boolean,
        default: false
    },
    winner: {
        type: String,
        default: null
    },
});

module.exports = model('Room', schema);