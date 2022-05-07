'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('wallet', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users', key: 'id'
        }
      },

      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('wallet');
  }
};
