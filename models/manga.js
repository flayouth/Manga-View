const { Model, DataTypes } = require('sequelize');

const Sequelize = require('../config/connection');

class Manga extends Model {}


Manga.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
    
{
    sequelize: Sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'manga',
  })


module.exports = Manga;