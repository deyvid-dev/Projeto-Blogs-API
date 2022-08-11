const express = require('express');
const { createUser, getUsers, getById } = require('../controllers/userController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createUser);
router.get('/', tokenMiddleware, getUsers);
router.get('/:id', tokenMiddleware, getById);

module.exports = router;
