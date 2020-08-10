const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    },
    play_date: {
        type: Date,
        default: Date.now, 
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;