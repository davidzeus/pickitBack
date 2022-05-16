'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
