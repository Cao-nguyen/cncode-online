const mongoose = require('mongoose');
const generate = require('../helpers/generate')
const setDate = require('../middlewares/admin/setDate');

const Schema = mongoose.Schema;

const Accounts = new Schema({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
    token: { type: String, default: generate.generateRandomString(20) },
    avatar: { type: String },
    role_id: { type: String },
    status: { type: String },
    deleted: { type: String, default: false },
    deletedAt: { 
        type: Date,
        get: setDate
    },
    createdAt: { 
        type: Date,
        get: setDate
    },
    updatedAt: { 
        type: Date,
        get: setDate
    }
}, { toJSON: { getters: true }, toObject: { getters: true } })

module.exports = mongoose.model('accounts', Accounts);