const { BlogPost, User, Category } = require('../database/models');

const getAll = async (req, res) => {
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

module.exports = { getAll, getById };
