const { BlogPost, User, Category, PostCategory } = require('../database/models');

const getAll = async (_req, res) => {
  const posts = await BlogPost.findAll({
    include: [{ model: User,
        as: 'user',
        attributes: { exclude: 'password' },
    },
    { model: Category,
        as: 'categories',
        through: { attributes: [] } },
],
});
 return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPost.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { tokenCreated } = req;
  const findId = await BlogPost.findOne({ where: { id }, raw: true });
  if (!findId) return res.status(404).json({ message: 'Post does not exist' });
  if (findId.userId !== tokenCreated.id) { 
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }
  
  console.log(`Aqui ===>${findId}`);
  await BlogPost.destroy({ where: { id } });
  return res.status(204).end();
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { tokenCreated } = req;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const categories = await Category.findAll({ where: { id: categoryIds } });
  console.log(categories);
  if (categories.length < 1) {
    console.log(`Aqui o log -------------------------------->>>${categories}`);
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  // console.log('-------CHEGOU AQUI !!!!!!!!!!!!!!!!!!!! ----------------');
  const post = await BlogPost.create({ 
    title, content, userId: tokenCreated.id, published: new Date(), updated: new Date() });
  const allPost = categoryIds.map((categoryId) => ({
    postId: post.id, categoryId,
  }));
  await PostCategory.bulkCreate(allPost);

  return res.status(201).json(post);
};
module.exports = { getAll, getById, deletePost, createPost };
