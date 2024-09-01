const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const settingsGeneral = new Schema({
    websiteName: String, 
    phone: String, 
    email: String, 
    address: String,
    copyright: String
}, 
{
    timestamp: true
})

module.exports = mongoose.model('settingsGeneral', settingsGeneral);