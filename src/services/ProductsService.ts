import prisma from '../database/Connection';

async function getAllProducts() {
  const allProducts = await prisma.products.findMany();

  if (!allProducts) return null;

  return allProducts;
}

async function getById(id: number) {
  const products = await prisma.products.findUnique({ where: { id }});

  if (!products) return null;

  if (products.quantity <= 0) return false;

  return products;
}

async function deleteProduct(id: number) {
  const products = await prisma.products.findUnique({ where: { id }});

  if (!products) return null;

  if (products) {
    await prisma.products.delete({ where: { id }});
  }
}

export default { getAllProducts, getById, deleteProduct };
