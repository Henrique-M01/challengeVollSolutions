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

async function createProduct(
  name: string,
  description: string,
  quantity: number,
  id: number,
    ) {
  const product = await prisma.products.findUnique({ where: { id }});

  if (product) return null;

  if (!product) {
    const created = await prisma.products.create({
      data: {
        name, description, quantity
      }
    });

    if (!created) return false;

    return created;
  }
}

export default { getAllProducts, getById, deleteProduct, createProduct };
