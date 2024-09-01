const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/userControllers')

router.get('/register', controllers.user)
router.post('/register', controllers.userPost)
router.get('/login', controllers.login)
router.post('/login', controllers.loginPost)
router.get('/logout', controllers.logout)
router.get('/password/forgot', controllers.forgotPassword)
router.post('/password/forgot', controllers.forgotPasswordPost)

module.exports = router