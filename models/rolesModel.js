const mongoose = require('mongoose');
const setDate = require('../middlewares/admin/setDate');

const Schema = mongoose.Schema;

const Roles = new Schema({
    name: { type: String },
    content: { type: String },
    permissions: {
        type: Array,
        default: []
    },
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

module.exports = mongoose.model('roles', Roles);