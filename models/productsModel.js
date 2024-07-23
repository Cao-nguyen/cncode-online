const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String },
    content: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    deleted: { type: String, default: false },
    deletedAt: { 
        type: Date,
        get: function(value) {
            if (value) {
                const date = new Date(value);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            }
            return value;
        }
    },
    createdAt: { 
        type: Date,
        get: function(value) {
            if (value) {
                const date = new Date(value);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            }
            return value;
        }
    },
    updatedAt: { 
        type: Date,
        get: function(value) {
            if (value) {
                const date = new Date(value);
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear();
                return `${day}/${month}/${year}`;
            }
            return value;
        }
    }
}, { toJSON: { getters: true }, toObject: { getters: true } })

module.exports = mongoose.model('Product', Product);