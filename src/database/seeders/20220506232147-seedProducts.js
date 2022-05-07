'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Martelo do thor',
        description: 'Martelo usado na batalha epica',
        quantity: 5
      },

      {
        name: 'Escudo do capitao america',
        description: 'Escudo forjado vibranium',
        quantity: 10
      },

      {
        name: 'Arco gaviao arqueiro',
        description: 'Portando flechas especiais e mira certeira',
        quantity: 2
      },

      {
        name: 'Traje homem de ferro',
        description: 'Feito com nanotecnologia, molda-se ao seu corpo',
        quantity: 13
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
}
  ;
