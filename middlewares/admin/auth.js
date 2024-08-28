const accounts = require('../../models/accountsModel')
const Role = require('../../models/rolesModel')

module.exports.requireAuth = async (req, res, next) => {    
    if (!req.cookies.token) {
        res.redirect("/admin/auth/login")
    } else {
        const user = await accounts.findOne({ token: req.cookies.token}).select('-password')
        if (!user) {
            res.redirect("/admin/auth/login")
        } else {
            const role = await Role.findOne({
                _id: user.role_id
            }).select('name permissions')
            res.locals.user = user
            res.locals.role = role
            next();
        }
    }
};
