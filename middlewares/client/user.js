const User = require('../../models/usersModel');

module.exports.inforUser = async (req, res, next) => {
    if (req.cookies && req.cookies.tokenUser) {
        const user = await User.findOne({
            tokenUser: req.cookies.tokenUser,
            deleted: false
        }).select("-password")

        if(user) {
            res.locals.user = user
        }
    }

    next();
};