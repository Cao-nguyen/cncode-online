const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/admin/categoryControllers')

router.get('/', controllers.category)

module.exports = router