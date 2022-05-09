import prisma from '../../src/database/Connection';

async function seedProductsTable() {
  const productOne = await prisma.products.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Martelo do thor',
      description: 'Martelo usado na batalha epica',
      quantity: 5
    }
  });

  const productTwo = await prisma.products.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Escudo do capitao america',
      description: 'Escudo forjado vibranium',
      quantity: 10
    }
  });

  const productThree = await prisma.products.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Arco gaviao arqueiro',
      description: 'Portando flechas especiais e mira certeira',
      quantity: 2
    }
  });

  const productFour = await prisma.products.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'Traje homem de ferro',
      description: 'Feito com nanotecnologia, molda-se ao seu corpo',
      quantity: 13
    }
  });
}

export default seedProductsTable;
