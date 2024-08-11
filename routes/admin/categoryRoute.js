const express = require('express')
const router = express.Router()

const upload = require('../../middlewares/admin/uploadImage')
const controllers = require('../../controllers/admin/categoryControllers')

router.get('/', controllers.category)
router.get('/create', controllers.create)
router.post('/create', upload.single('image'), controllers.createPost)

module.exports = router