const accounts = require('../../models/accountsModel')

module.exports.requireAuth = async (req, res, next) => {    
    if (!req.cookies.token) {
        res.redirect("/admin/auth/login")
    } else {
        const user = await accounts.findOne({ token: req.cookies.token})
        if (!user) {
            res.redirect("/admin/auth/login")
        } else {
            next();
        }
    }
};
