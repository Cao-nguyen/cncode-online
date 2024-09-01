const md5 = require('md5')
const User = require('../../models/usersModel')
const ForgotPassword = require('../../models/forgot-passwordModel')
const generateHelper = require('../../helpers/generate')

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

// [GET] /user/logout
module.exports.logout = async (req, res) => {
    res.clearCookie("tokenUser")

    res.redirect('/')
}

// [GET] /user/password/forgot
module.exports.forgotPassword = async (req, res) => {
    res.render('client/pages/user/forgot-password', {
        pageTitle: 'Lấy lại mật khẩu'
    })
}

// [POST] /user/password/forgot
module.exports.forgotPasswordPost = async (req, res) => {
    const email = req.body.email 

    const user = await User.findOne({
        email: email,
        deleted: false
    })

    if(!user) {
        req.fash('error', 'Email không tồn tại')
        res.redirect('back')
        return
    }

    const otp = generateHelper.generateRandomNumber(6)

    const objectForgotPassword = {
        email: email,
        otp: otp,
        expireAt: Date.now()
    }

    const forgotPassword = new ForgotPassword(objectForgotPassword); 
    await forgotPassword.save();

    res.send('Ok')
}