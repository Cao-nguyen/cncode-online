const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Chat = new Schema({
    user_id: String, 
    room_chat_id: String, 
    content: String, 
    images: Array, 
    deleted: {
        type: String, 
        default: false
    },
    deletedAt: Date
}, {
    timestamp: true
})

module.exports = mongoose.model('chats', Chat);