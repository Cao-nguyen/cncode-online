const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')

// [GET] /admin/dashboard
module.exports.dashboard = async (req, res, next) => {
    res.render('admin/pages/dashboard/index', { 
        pageTitle: 'Tổng quan'
    })
}