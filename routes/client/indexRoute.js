const homeRoutes = require('./homeRoute')
const productsRoutes = require('./productsRoute')
const searchRoutes = require('./searchRoute')
const userRoutes = require('./userRoute')
const chatRoutes = require('./chatRoute')
const userMiddleware = require('../../middlewares/client/user')
const settingsGeneralMiddleware = require('../../middlewares/client/settingsGeneral')
const authMiddleware = require('../../middlewares/client/auth')

module.exports = (app) => {
    app.use(userMiddleware.inforUser)
    app.use(settingsGeneralMiddleware.settingsGeneral)
    app.use('/', homeRoutes)
    app.use('/products', productsRoutes)
    app.use('/search', searchRoutes)
    app.use('/user', userRoutes)
    app.use('/chat', authMiddleware.requireAuth, chatRoutes)
}