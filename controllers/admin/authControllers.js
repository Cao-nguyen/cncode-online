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

    res.redirect("/admin/dashboard")
}