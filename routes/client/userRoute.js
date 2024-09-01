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
router.get('/password/otp', controllers.otpPassword)
router.post('/password/otp', controllers.otpPasswordPost)
router.get('/password/reset', controllers.resetPassword)
router.post('/password/reset', controllers.resetPasswordPost)

module.exports = router