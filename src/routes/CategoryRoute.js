const express = require('express');
const { createCategory } = require('../controllers/categoryController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', tokenMiddleware, createCategory);

module.exports = router;
