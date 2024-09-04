const dashboardRoutes = require('./dashboardRoute')
const productsRoutes = require('./productsRoute')
const categoryRoutes = require('./categoryRoute')
const rolesRoutes = require('./roleRoute')
const accountsRoutes = require('./accountsRoute')
const authRoutes = require('./authRoute')
const myAccountRoutes = require('./myAccountRoute')
const settingsRoutes = require('./settingsRoute')

const authMiddleware = require("../../middlewares/admin/auth")
const authControllers = require('../../controllers/admin/authControllers')

module.exports = (app) => {
    app.get("/admin", authControllers.login)

    app.use('/admin/dashboard', authMiddleware.requireAuth, dashboardRoutes)
    app.use('/admin/products', authMiddleware.requireAuth, productsRoutes)
    app.use('/admin/category', authMiddleware.requireAuth, categoryRoutes)
    app.use('/admin/roles', authMiddleware.requireAuth, rolesRoutes)
    app.use('/admin/accounts', authMiddleware.requireAuth, accountsRoutes)
    app.use('/admin/auth', authRoutes)
    app.use('/admin/my-account', authMiddleware.requireAuth, myAccountRoutes)
    app.use('/admin/settings', authMiddleware.requireAuth, settingsRoutes)
}