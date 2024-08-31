const mongoose = require('mongoose');
const setDate = require('../middlewares/admin/setDate');
const generate = require('../helpers/generate');

const Schema = mongoose.Schema;

const Users = new Schema({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    tokenUser: {
        type: String,
        default: generate.generateRandomString(30)
    },
    status: { 
        type: String,
        default: 'active'
    },
    deleted: { type: String, default: false }
}, 
{
    timestamp: true, get: setDate
}, { toJSON: { getters: true }, toObject: { getters: true } })

module.exports = mongoose.model('users', Users);