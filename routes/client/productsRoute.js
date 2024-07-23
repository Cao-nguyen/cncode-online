const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/productsControllers')

router.get('/', controllers.index)
router.get('/:slug', controllers.show)

module.exports = router