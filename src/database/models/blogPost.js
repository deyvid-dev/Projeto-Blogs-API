const { DataTypes } = require('sequelize');

const atributes = {
  id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING,
    foreignKey: true
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false
  }
}

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost',
    atributes,
    {
      timestamps: false,
    },
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};