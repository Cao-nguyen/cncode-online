const settingsGeneral = require('../../models/settingsGeneralModel')

// [GET] /admin/settings/general
module.exports.general = async (req, res) => {
    const general = await settingsGeneral.findOne({})

    res.render('admin/pages/settings/general', {
        pageTitle: "Cài đặt chung",
        general: general
    })
}

module.exports.generalPatch = async (req, res) => {
    const general = await settingsGeneral.findOne({})

    if(general) {
        await settingsGeneral.updateOne({
            _id: general._id
        }, req.body)
    } else {
        const general = new settingsGeneral(req.body)
        await general.save()
    }

    req.flash('error', 'Đã cập nhật thông tin thành công')

    res.redirect('back')
}