const express = require('express')
const router = express.Router()

const upload = require('../../middlewares/admin/uploadImage')
const controllers = require('../../controllers/admin/prouductsControllers')

router.get('/', controllers.index)
router.delete('/delete/:id', controllers.deleteItem)
router.get('/create', controllers.create)
router.post('/create', upload.single('image'), controllers.createPost)
router.get('/edit/:id', controllers.edit)
router.patch('/edit/:id', upload.single('image'), controllers.editPatch)
router.get('/detail/:id', controllers.detail)

module.exports = router