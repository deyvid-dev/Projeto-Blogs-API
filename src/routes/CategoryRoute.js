const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', tokenMiddleware, createCategory);
router.get('/', tokenMiddleware, getCategories);

module.exports = router;
