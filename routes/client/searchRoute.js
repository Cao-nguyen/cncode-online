const express = require('express')
const router = express.Router()

const controller = require('../../controllers/client/searchControllers')

router.get('/', controller.search)

module.exports = router