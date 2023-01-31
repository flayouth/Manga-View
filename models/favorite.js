const { Model, DataTypes } = require('sequelize');

const Sequelize = require('../config/connection');

class Favorite extends Model {}


Favorite.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  star: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
},
    
{
    sequelize: Sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Favorite',
  })


module.exports = Favorite;