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

module.exports = { getAll };
