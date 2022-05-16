'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions', [{
      car_id: 1,
      owner_id: 1,
      service_id: 1,
      status: 'Ok',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      car_id: 1,
      owner_id: 1,
      service_id: 2,
      status: 'Pen',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      car_id: 1,
      owner_id: 1,
      service_id: 3,
      status: 'KO',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      car_id: 3,
      owner_id: 2,
      service_id: 2,
      status: 'OK',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};
