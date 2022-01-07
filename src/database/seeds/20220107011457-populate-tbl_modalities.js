'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tbl_modalities', [
      { 
        name: 'EAD',
        created_at: new Date(),
        updated_at: new Date()
      },
      { 
        name: 'Presencial',
        created_at: new Date(),
        updated_at: new Date()
      },
      { 
        name: 'Semipresencial',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tbl_modalities', null, {});
  }
};
