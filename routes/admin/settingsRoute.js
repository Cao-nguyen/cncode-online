const express = require('express')
const router = express.Router()

const upload = require('../../middlewares/admin/uploadImage')
const controllers = require('../../controllers/admin/settingsControllers')

router.get('/general', controllers.general)
router.patch('/general', controllers.generalPatch)

module.exports = router