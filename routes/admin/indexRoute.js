const dashboardRoutes = require('./dashboardRoute')
const productsRoutes = require('./productsRoute')
const categoryRoutes = require('./categoryRoute')
const rolesRoutes = require('./roleRoute')
const accountsRoutes = require('./accountsRoute')
const authRoutes = require('./authRoute')

module.exports = (app) => {
    app.use('/admin/dashboard', dashboardRoutes)
    app.use('/admin/products', productsRoutes)
    app.use('/admin/category', categoryRoutes)
    app.use('/admin/roles', rolesRoutes)
    app.use('/admin/accounts', accountsRoutes)
    app.use('/admin/auth', authRoutes)
}