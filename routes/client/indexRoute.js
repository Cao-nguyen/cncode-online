const homeRoutes = require('./homeRoute')
const productsRoutes = require('./productsRoute')
const search = require('./searchRoute')
const user = require('./userRoute')

module.exports = (app) => {
    app.use('/', homeRoutes)
    app.use('/products', productsRoutes)
    app.use('/search', search)
    app.use('/user', user)
}