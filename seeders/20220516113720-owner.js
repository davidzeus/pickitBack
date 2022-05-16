'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('owners', [{
      lastName: 'Gomez',
      name: 'Alejandro',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lastName: 'Gutierrez',
      name: 'Rodolfo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lastName: 'Einfel',
      name: 'Zulma',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
