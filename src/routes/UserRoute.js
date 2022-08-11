const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createUser);
router.get('/', tokenMiddleware, getUsers);

module.exports = router;
