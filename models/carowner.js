'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarOwner.belongsTo(models.cars,
        {
            as: 'cars',
            foreignKey: 'car_id',
        }
    );
    CarOwner.belongsTo(models.owners,
        {
            as: 'owners',
            foreignKey: 'owner_id',
        }
    );
    }
  }
  CarOwner.init({
    car_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'CarOwner',
  });
  return CarOwner;
};