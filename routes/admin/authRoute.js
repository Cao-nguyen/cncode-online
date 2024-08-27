const express = require('express');
const router = express.Router();

const controllers = require('../../controllers/admin/authControllers');

router.get('/login', controllers.login);

module.exports = router;