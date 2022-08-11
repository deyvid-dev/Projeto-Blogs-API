const { DataTypes } = require('sequelize');

const atributes = {
  postId: { 
    type: DataTypes.INTEGER, 
    primaryKey: true 
  },
  categoryId: { 
    type: DataTypes.INTEGER, 
    primaryKey: true 
  },
}

module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory',
    atributes,
    {
      timestamps: false,
    },
  );
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategory;
};
