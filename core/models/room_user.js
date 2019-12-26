const crypto = require('crypto');
const { Schema, model } = require('mongoose');


const schema = new Schema({
    room: {
        type: ObjectId,
        ref: 'Room',
        index: true,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    role: {
        type: String,
        default: 'civil'
    },
    is_dead: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Room', schema);