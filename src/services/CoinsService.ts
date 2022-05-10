import prisma from '../database/Connection';

async function getCoins(id: number) {
  const coins = await prisma.users.findUnique({ where: { id }});

  if (!coins) return null;

  return coins.coins;
}

export default { getCoins };
