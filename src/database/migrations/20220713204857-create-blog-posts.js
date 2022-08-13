'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('BlogPosts', { 
    id: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: { 
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: { 
      type: Sequelize.STRING,
      allowNull: false,
    },
    published: { 
      type: Sequelize.DATE,
    },
    updated: { 
      type: Sequelize.DATE,
    },
    userId: { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
