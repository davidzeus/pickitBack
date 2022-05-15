'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      owners.belongsTo(models.cars,
        {
          foreignKey: {
            name: 'id',
            allowNull: true,
          }
        })
    }
  }
  owners.init({
    lastName: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'owners',
  });
  return owners;
};