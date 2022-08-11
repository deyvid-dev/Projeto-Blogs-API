const express = require('express');
const { getAll } = require('../controllers/postController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', tokenMiddleware, getAll);

module.exports = router;