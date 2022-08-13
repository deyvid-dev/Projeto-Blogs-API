'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('PostCategories', { 
    postId: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'BlogPosts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete:'CASCADE',
    },
    categoryId: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
