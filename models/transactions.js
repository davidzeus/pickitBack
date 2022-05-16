'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactions.belongsTo(models.cars,
        {
          as: 'car',
          foreignKey: 'id'
        }
      );
      transactions.belongsTo(models.owners,
        {
          as: 'owner',
          foreignKey: 'id'
        }
      );
      transactions.belongsTo(models.services,
        {
          as: 'services',
          foreignKey: 'id',
        }
      );
    }
  }
  transactions.init({
    car_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};