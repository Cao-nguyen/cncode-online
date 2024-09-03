const Category = require('../../models/categoryModel')
const Product = require('../../models/productsModel')
const Account = require('../../models/accountsModel')
const User = require('../../models/usersModel')

// [GET] /admin/dashboard
module.exports.dashboard = async (req, res, next) => {
    const statistc = {
        category: {
            total: 0
        },
        products: {
            total: 0,
        },
        account: {
            total: 0,
            active: 0,
            inactive: 0
        },
        user: {
            total: 0,
            active: 0,
            inactive: 0
        }
    }

    statistc.category.total = await Category.count({
        deleted: false
    })

    statistc.products.total = await Product.count({
        deleted: false
    })

    statistc.account.total = await Account.count({
        deleted: false
    })

    statistc.user.total = await User.count({
        deleted: false
    })

    res.render('admin/pages/dashboard/index', { 
        pageTitle: 'Tổng quan',
        statistc: statistc
    })
}