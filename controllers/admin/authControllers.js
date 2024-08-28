const md5 = require('md5')
const Accounts = require('../../models/accountsModel')

//[GET] /admin/auth/login
module.exports.login = async (req, res, next) => {
    res.render('admin/pages/auth/login', { 
        pageTitle: 'Đăng nhập',
    });
}

//[POST] /admin/auth/login
module.exports.loginPost = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    const user = await Accounts.findOne({
        email: email,
        deleted: false
    })

    if(!req.body.email) {
        req.flash('error', 'Vui lòng nhập email')
        res.redirect('back')
        return
    }

    if(!req.body.password) {
        req.flash('error', 'Vui lòng nhập mật khẩu')
        res.redirect('back')
        return
    }

    if(!user) {
        req.flash('error', 'Email không tồn tại')
        res.redirect('back')
        return
    } 

    if(md5(password) != user.password) {
        req.flash('error', 'Mật khẩu không chính xác')
        res.redirect('back')
        return
    }

    if(user.status != "active") {
        req.flash('error', 'Tài khoản đã bị khoá')
        res.redirect('back')
        return
    }

    res.cookie("token", user.token)
    res.redirect("/admin/dashboard")
}