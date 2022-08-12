const express = require('express');
const { getAll, getById } = require('../controllers/postController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', tokenMiddleware, getAll);
router.get('/:id', tokenMiddleware, getById);

module.exports = router;