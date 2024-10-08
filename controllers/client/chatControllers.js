const Chat = require('../../models/chatModel')
const User = require('../../models/usersModel')

// [GET] /chat
module.exports.index = async (req, res) => {
    const userId = res.locals.user._id
    const fullName = res.locals.user.fullName

    _io.once('connection', (socket) => {
        socket.on('CLIENT_SEND_MESSAGE', async (content) => {
            const chat = new Chat({
                user_id: userId,
                content: content,
            })
            await chat.save()

            _io.emit("SERVER_RETURN_MESSAGE", {
                userId: userId,
                fullName: fullName,
                content: content
            })
        })

        socket.on('CLIENT_SEND_TYPING', (type) => {
            socket.broadcast.emit("SERVER_RETURN_TYPING", {
                userId: userId,
                fullName: fullName,
                type: type
            })
        })
    })

    const chats = await Chat.find({
        deleted: false
    })

    for (const chat of chats) {
        const inforUser = await User.findOne({
            _id: chat.user_id 
        }).select("fullName")

        chat.inforUser = inforUser
    }

    res.render('client/pages/chat/index', {
        pageTitle: 'Chat',
        chats: chats
    })
}