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
    ) {

  const created = await prisma.products.create({
    data: {
      name, description, quantity
    }
  });

  if (!created) return false;

  return created;
}

async function updateProducts(quantity: number, name: string, description: string, id: number) {
  const updated = await prisma.products.update({
    data: { quantity, name, description },
    where: { id },
  });

  if (!updated) return null;

  return updated;
}

async function updateBySale(id: number) {
  const product = await prisma.products.findUnique({ where: { id } });

  if (!product) return null;

  if (product.quantity < 1) return false;

  if (product) {
    const update = await prisma.products.update({
      data: { quantity: product.quantity -1 },
      where: { id },
    })

    if(!update) return null;

    return update;
  }
}

export default {
  getAllProducts,
  getById,
  deleteProduct,
  createProduct,
  updateProducts,
  updateBySale,
};
