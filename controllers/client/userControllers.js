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