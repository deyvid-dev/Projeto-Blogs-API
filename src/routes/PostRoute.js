const express = require('express');
const { 
  getAll, getById, deletePost, createPost, updatePost,
      } = require('../controllers/postController');
const { tokenMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', tokenMiddleware, getAll);
router.post('/', tokenMiddleware, createPost);
router.delete('/:id', tokenMiddleware, deletePost);
router.get('/:id', tokenMiddleware, getById);
router.put('/:id', tokenMiddleware, updatePost);

module.exports = router;