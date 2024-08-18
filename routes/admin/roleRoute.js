const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/admin/rolesControllers')

router.get('/', controllers.roles)
router.get('/create', controllers.create)
router.post('/create', controllers.createPost)

module.exports = router