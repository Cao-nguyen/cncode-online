const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forgotPassword = new Schema({
    email: { type: String },
    otp: { type: String},
    expireAt: {
        type: Date,
        expires: 1000
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

module.exports = mongoose.model('forgot-password', forgotPassword);