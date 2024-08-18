const { listmongoose } = require('../../util/mongoose');
const { onemongoose } = require('../../util/mongoose')
const Role = require('../../models/rolesModel')

// [GET] /admin/roles
module.exports.roles = async (req, res, next) => {
    let find = {
        deleted: false
    }
    
    const roles = await Role.find(find)

    res.render('admin/pages/roles/roles', { 
        pageTitle: 'Nhóm quyền',
        roles: roles
    })
}

// [GET] /admin/roles/create
module.exports.create = async (req, res, next) => {
    res.render('admin/pages/roles/create', { 
        pageTitle: 'Thêm nhóm quyền'
    })
}

// [POST] /admin/roles/create
module.exports.createPost = async (req, res, next) => {
    const roles = new Role(req.body)
    await roles.save()
    
    res.redirect('/admin/roles')
}