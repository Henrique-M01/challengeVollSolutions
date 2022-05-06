'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('wallet', [
    {
      userId: 1,
      quantity: 354,
    },

    {
      userId: 2,
      quantity: 8790,
    },

    {
      userId: 3,
      quantity: 25,
    },
  ], {});

  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('wallet', null, {});

  }
};
