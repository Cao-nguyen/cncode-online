const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/userControllers')

router.get('/register', controllers.user)
router.post('/register', controllers.userPost)
router.get('/login', controllers.login)
router.post('/login', controllers.loginPost)
router.get('/logout', controllers.logout)

module.exports = router