const express = require('express');
const router = express.Router();

const controllers = require('../../controllers/admin/accountsControllers');

router.get('/', controllers.accounts);
router.get('/create', controllers.create);
router.post('/create', controllers.createPost);

module.exports = router;