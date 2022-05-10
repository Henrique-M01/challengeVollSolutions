import prisma from '../database/Connection';

async function getAllProducts() {
  const allProducts = await prisma.products.findMany();

  if (!allProducts) return null;

  return allProducts;
}

export default { getAllProducts };
