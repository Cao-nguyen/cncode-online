const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/userControllers')

router.get('/register', controllers.user)
router.post('/register', controllers.userPost)

module.exports = router