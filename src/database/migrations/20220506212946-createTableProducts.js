'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('products', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
       },
      
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },

      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      quantity: {
        allowNull:false,
        type: Sequelize.INTEGER
      }
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('products');
  }
};
