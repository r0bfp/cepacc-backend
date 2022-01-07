'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('tbl_modalities_courses', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        id_modality: {
          type: Sequelize.INTEGER,
          references: { model: 'tbl_modalities', key: 'id' },
          allowNull: false
        },
        id_course: {
          type: Sequelize.INTEGER,
          references: { model: 'tbl_courses', key: 'id' },
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_modalities_courses');
  }
};
