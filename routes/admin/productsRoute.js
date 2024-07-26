const express = require('express')
const multer = require('multer')
const upload = multer()
const uploadCloud = require('../../middlewares/admin/uploadCloud')
const router = express.Router()

const controllers = require('../../controllers/admin/prouductsControllers')

router.get('/', controllers.index)
router.delete('/delete/:id', controllers.deleteItem)
router.get('/create', controllers.create)
router.post('/create', upload.single('image'), uploadCloud.upload, controllers.createPost)
router.get('/edit/:id', controllers.edit)
router.patch('/edit/:id', upload.single('image'), uploadCloud.upload, controllers.editPatch)
router.get('/detail/:id', controllers.detail)

module.exports = router