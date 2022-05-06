'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'secret_password',
        role: 'user'
      },
      {
        name: 'Henrique Silva',
        email: 'silvahenrique@email.com',
        password: 'secret_silva',
        role: 'admin'
      },
      {
        name: 'Carol Santos',
        email: 'santos@email.com',
        password: 'santos_password',
        role: 'user'
      },
    ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
