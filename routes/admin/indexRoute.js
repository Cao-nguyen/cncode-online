const dashboardRoutes = require('./dashboardRoute')
const productsRoutes = require('./productsRoute')
const categoryRoutes = require('./categoryRoute')
const rolesRoutes = require('./roleRoute')

module.exports = (app) => {
    app.use('/admin/dashboard', dashboardRoutes)
    app.use('/admin/products', productsRoutes)
    app.use('/admin/category', categoryRoutes)
    app.use('/admin/roles', rolesRoutes)
}