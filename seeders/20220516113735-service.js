'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [{
      description: 'Cambio de Aceite',
      price: '3500,10',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      description: 'Cambio de Filtro',
      price: '1500,80',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      description: 'Cambio de Correa',
      price: '6010,60',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  }
};
