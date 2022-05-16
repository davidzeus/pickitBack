'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carsOwners', [{
       car_id: 1,
       owner_id: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      car_id: 2,
      owner_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      car_id: 3,
      owner_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carsOwners', null, {});
  }
};
