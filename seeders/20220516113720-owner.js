'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
    await queryInterface.bulkDelete('owners', null, {});
  }
};
