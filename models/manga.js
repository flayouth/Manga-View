const { Model, DataTypes } = require('sequelize');

const Sequelize = require('../config/connection');

class Manga extends Model {}


Manga.init({
  //
},
    
{
    sequelize: Sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Manga',
  })


module.exports = Manga;