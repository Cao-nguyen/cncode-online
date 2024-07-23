const dashboardRoutes = require('./dashboardRoute')
const productsRoutes = require('./productsRoute')

module.exports = (app) => {
    app.use('/admin/dashboard', dashboardRoutes)
    app.use('/admin/products', productsRoutes)
}