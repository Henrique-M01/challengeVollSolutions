import prisma from '../database/Connection';

async function getCoins(id: number) {
  const coins = await prisma.users.findUnique({ where: { id }});

  if (!coins) return null;

  return coins.coins;
}

async function updateCoins(id: number, coins: number) {
  const user = await prisma.users.findUnique({ where: { id }});

  if (!user) return null;

  if (user) {
    const updatedCoins = await prisma.users.update({
      data: { coins },
      where: { id }
    });

    if (!updatedCoins) return null;

    return updatedCoins.coins;
  }
}

export default { getCoins, updateCoins };
