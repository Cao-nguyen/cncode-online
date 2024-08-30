// [GET] /admin/my-account/
module.exports.index = async (req, res) => {
    res.render('admin/pages/myAccount/account', {
        pageTitle: "Thông tin cá nhân",
    })
}