'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cars', [{
      manufacturer: "ford",
      models: "focus",
      color: "negro",
      year: '2013',
      registration: 'ftu489',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      manufacturer: "nissan",
      models: "frontier",
      color: "blanco",
      year: '2017',
      registration: 'ac458as',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      manufacturer: "renault",
      models: "megane III rs",
      color: "gris",
      year: '2020',
      registration: 'ad179df',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
