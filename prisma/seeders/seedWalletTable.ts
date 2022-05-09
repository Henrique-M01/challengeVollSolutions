import prisma from '../../src/database/Connection';

async function seedWalletTable() {
  const walletOne = await prisma.wallet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: 1,
      quantity: 571
    }
  });

  const walletTwo = await prisma.wallet.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: 2,
      quantity: 8790
    }
  });

  const walletThree = await prisma.wallet.upsert({
    where: { id: 3 },
    update: {},
    create: {
      userId: 3,
      quantity: 254
    }
  });
}

export default seedWalletTable;
