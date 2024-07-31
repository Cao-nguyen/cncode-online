const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /admin/dashboard
module.exports.category = async (req, res, next) => {
    res.render('admin/pages/category/category', { 
        pageTitle: 'Danh mục'
    })
}