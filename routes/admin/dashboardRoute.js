const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/admin/dashboardControllers')

router.get('/', controllers.dashboard)

module.exports = router