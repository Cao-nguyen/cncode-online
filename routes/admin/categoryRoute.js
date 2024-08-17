const express = require('express')
const router = express.Router()

const upload = require('../../middlewares/admin/uploadImage')
const controllers = require('../../controllers/admin/categoryControllers')

router.get('/', controllers.category)
router.get('/create', controllers.create)
router.post('/create', upload.single('image'), controllers.createPost)
router.get('/edit/:id', controllers.edit)
router.patch('/edit/:id', upload.single('image'), controllers.editPatch)

module.exports = router