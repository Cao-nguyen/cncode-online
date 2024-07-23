const homeRoutes = require('./homeRoute')
const productsRoutes = require('./productsRoute')

module.exports = (app) => {
    app.use('/', homeRoutes)
    app.use('/products', productsRoutes)
}