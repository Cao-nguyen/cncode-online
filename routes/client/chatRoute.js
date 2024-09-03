const express = require('express')
const router = express.Router()

const controllers = require('../../controllers/client/chatControllers')

router.get('/', controllers.index)

module.exports = router