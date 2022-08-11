const { DataTypes } = require('sequelize');

const atributes = {
  id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

module.exports = (sequelize) => {
  const Category = sequelize.define('Category',
    atributes,
    {
      timestamps: false,
    },
  );
  return Category;
};
