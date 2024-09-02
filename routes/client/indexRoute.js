const homeRoutes = require('./homeRoute')
const productsRoutes = require('./productsRoute')
const search = require('./searchRoute')
const user = require('./userRoute')
const userMiddleware = require('../../middlewares/client/user')
const settingsGeneralMiddleware = require('../../middlewares/client/settingsGeneral')

module.exports = (app) => {
    app.use(userMiddleware.inforUser)
    app.use(settingsGeneralMiddleware.settingsGeneral)
    app.use('/', homeRoutes)
    app.use('/products', productsRoutes)
    app.use('/search', search)
    app.use('/user', user)
}