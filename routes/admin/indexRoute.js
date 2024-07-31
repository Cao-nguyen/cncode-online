const dashboardRoutes = require('./dashboardRoute')
const productsRoutes = require('./productsRoute')
const categoryRoutes = require('./categoryRoute')

module.exports = (app) => {
    app.use('/admin/dashboard', dashboardRoutes)
    app.use('/admin/products', productsRoutes)
    app.use('/admin/category', categoryRoutes)
}