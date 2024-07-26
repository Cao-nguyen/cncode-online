const express = require('express')
const router = express.Router()

const uploadCloud = require('../../middlewares/admin/uploadCloud')
const controllers = require('../../controllers/admin/prouductsControllers')

router.get('/', controllers.index)
router.delete('/delete/:id', controllers.deleteItem)
router.get('/create', controllers.create)
router.post('/create', uploadCloud, controllers.createPost)
router.get('/edit/:id', controllers.edit)
router.patch('/edit/:id', uploadCloud, controllers.editPatch)
router.get('/detail/:id', controllers.detail)

module.exports = router