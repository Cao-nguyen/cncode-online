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

// [GET] /admin/roles/edit
module.exports.edit = async (req, res, next) => {
    const id = req.params.id

    let find = {
        _id: id,
        deleted: false
    }

    const roles = await Role.findOne(find)

    res.render('admin/pages/roles/edit', { 
        pageTitle: 'Sửa nhóm quyền',
        roles: roles
    })
}

// [PATCH] /admin/roles/edit
module.exports.editPatch = async (req, res, next) => {
    const id = req.params.id 

    await Role.updateOne({ _id: id }, req.body)

    res.redirect('back')
}

// [GET] /admin/roles/permissions
module.exports.permissions = async (req, res, next) => {
    let find = {
        deleted: false
    }

    const roles = await Role.find(find)

    res.render('admin/pages/roles/permissions', { 
        pageTitle: 'Phân quyền',
        roles: roles
    })
}

// [PATCH] /admin/roles/permissions
module.exports.permissionsPatch = async (req, res, next) => {
    try {
        if (!req.body.permissions) throw new Error("No permissions data provided");

        const permissions = JSON.parse(req.body.permissions);

        for (const { id, permission } of permissions) {
            if (!id || !Array.isArray(permission)) throw new Error("Invalid data structure");

            await Role.updateOne({ _id: id }, { $set: { permissions: permission } });
        }

        res.redirect('back');
    } catch (error) {
        console.error("Error updating permissions:", error.message);
        res.status(500).send("Internal Server Error");
    }
};