const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /
module.exports.index = async (req, res, next) => {
    res.render('client/pages/home/index', { 
        pageTitle: 'Trang chủ'
    })
}