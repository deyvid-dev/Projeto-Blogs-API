const { DataTypes } = require('sequelize');

const atributes = {
  id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

module.exports = (sequelize) => {
  const user = sequelize.define('User',
    atributes,
    {
      underscored: true, // faz um field em todas as propriedades
      timestamps: false,
      tableName: 'User'
    },
  );
  return user;
};
