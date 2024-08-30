const categoryMiddleware = require('../../middlewares/client/category')
const homeRoutes = require('./homeRoute')
const productsRoutes = require('./productsRoute')

module.exports = (app) => {
    app.use('/', categoryMiddleware.category, homeRoutes)
    app.use('/products', categoryMiddleware.category, productsRoutes)
}