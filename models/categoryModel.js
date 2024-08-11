const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
const setDate = require('../middlewares/admin/setDate')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Category = new Schema({
    name: { type: String },
    content: { type: String },
    image: { type: String },
    parent_id: { type: String, default: ""},
    position: { type: Number },
    slug: { type: String, slug: 'name', unique: true },
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

module.exports = mongoose.model('categories', Category);