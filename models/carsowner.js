'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carsOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      carsOwner.belongsTo(models.cars,
        {
          as: 'car',
          foreignKey: 'car_id'
        }
      );
      carsOwner.belongsTo(models.owners,
        {
          as: 'owner',
          foreignKey: 'owner_id'
        }
      );
    }
  }
  carsOwner.init({
   /*  car_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER */
  }, {
    sequelize,
    modelName: 'carsOwner',
  });
  return carsOwner;
};