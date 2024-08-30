const homeRoutes = require('./homeRoute')
const productsRoutes = require('./productsRoute')
const search = require('./searchRoute')

module.exports = (app) => {
    app.use('/', homeRoutes)
    app.use('/products', productsRoutes)
    app.use('/search', search)
}