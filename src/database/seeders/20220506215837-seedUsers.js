'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: '$2a$10$hivelJBMidKzG4r1NTase.c08xjzEjEf2eUXsiGQFnxd83ZWIU.eO', //secret_password
        role: 'user'
      },
      {
        name: 'Henrique Silva',
        email: 'silvahenrique@email.com',
        password: '$2a$12$GTlJdM8tGJs8eAyOFtQADeem7VqeYZRh6hjwQPGwIGJWKHxdNcccO', //secret_silva
        role: 'admin'
      },
      {
        name: 'Carol Santos',
        email: 'santos@email.com',
        password: '$2a$12$5gMrz9SWw10ZUySxWXvw9OpdPOB6skZTcczotOGbn9hvrpvkFtV82', //santos_password
        role: 'user'
      },
    ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
