const { Model, DataTypes } = require('sequelize');

const Sequelize = require('../config/connection');

class Artists extends Model {}


Artists.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
    
{
    sequelize: Sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Artists',
  })


module.exports = Artists;