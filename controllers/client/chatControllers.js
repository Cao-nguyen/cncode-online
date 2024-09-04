const Chat = require('../../models/chatModel')

// [GET] /chat
module.exports.index = async (req, res) => {
    const userId = res.locals.user._id

    _io.on('connection', (socket) => {
        socket.on('CLIENT_SEND_MESSAGE', async (content) => {
            const chat = new Chat({
                user_id: userId,
                content: content,
            })
            await chat.save()
        })
    })

    res.render('client/pages/chat/index', {
        pageTitle: 'Chat'
    })
}