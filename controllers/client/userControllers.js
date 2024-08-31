const md5 = require('md5')
const User = require('../../models/usersModel')

// [GET] /user/register
module.exports.user = async (req, res) => {
    res.render('client/pages/user/register', {
        pageTitle: 'Đăng ký tài khoản'
    })
}

// [POST] /user/register
module.exports.userPost = async (req, res) => {
    const exisEmail = await User.findOne({
        email: req.body.email, 
        deleted: false
    })

    if(exisEmail) {
        req.fash('error', 'Email đã tồn tại')
        res.redirect('back')
        return
    } 

    req.body.password = md5(req.body.password)

    const user = new User(req.body)
    await user.save()

    res.cookie("tokenUser", user.tokenUser)

    res.redirect('/')
}

// [GET] /user/login
module.exports.login = async (req, res) => {
    res.render('client/pages/user/login', {
        pageTitle: 'Đăng nhập'
    })
}

// [POST] /user/login
module.exports.loginPost = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({
        email: email,
        deleted: false,
    })

    if(!user) {
        req.fash('error', 'Tài khoản không tồn tại')
        res.redirect('back')
        return
    } 

    if(md5(password) != user.password) {
        req.fash('error', 'Sai mật khẩu')
        res.redirect('back')
        return
    } 

    if(user.status == 'inactive') {
        req.fash('error', 'Tài khoản đã bị khoá')
        res.redirect('back')
        return
    } 

    res.cookie("tokenUser", user.tokenUser)

    res.redirect('/')

}