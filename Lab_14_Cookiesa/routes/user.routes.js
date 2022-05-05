const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/login', userController.get_login);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/tops', userController.tops);
router.get('/', userController.root);

module.exports = router;