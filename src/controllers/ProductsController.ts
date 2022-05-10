import { NextFunction, Request, Response } from 'express';
import ProductsService from '../services/ProductsService'

async function getAllProducts(_req: Request, res: Response, next: NextFunction) {
  try {
    const allProducts = await ProductsService.getAllProducts()

    if (!allProducts) return res.status(404).json({
      message: 'Products not found' });

    return res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const products = await ProductsService.getById(Number(id));

    if (products === null) return res.status(404)
      .json({ message: 'Products not found' });

    if (products === false) return res.status(404)
      .json({ message: 'Sold out product'});

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const deletedProduct = await ProductsService.deleteProduct(Number(id));

    if (deletedProduct === null) return res.status(401).json({
      message: 'Product does not exist in the database' });

    return res.status(200).json({ message: 'Successfully deleted' })
  } catch (error) {
    next(error);
  }
}

async function createProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { name, description, quantity } = req.body;

    const created = await ProductsService.createProduct(
      name, description, quantity, Number(id));

    if (created === null) return res.status(401)
      .json({ message: 'Product already exists' });
    
    if (created === false) return res.status(401)
      .json({ message: 'Failed to create the product' });

    return res.status(201).json(created);
  } catch (error) {
    next(error);
  }
}

async function updateProductsQuantity(req: Request, res: Response, next: NextFunction) {
  try {
    const { quantity } = req.body;
    const { id } = req.params;

    const updateQuantity = await ProductsService.updateProductsQuantity(
      quantity, Number(id));

    if (updateQuantity === null) return res.status(404)
      .json({ message: 'Product not found' });

    return res.status(200)
      .json({ message: 'Successfully update', updated: updateQuantity });
  } catch (error) {
    next(error);
  }
}

async function updateBySale(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    
    const update = await ProductsService.updateBySale(Number(id));

    if (update === null) return res.status(404)
      .json({ message: 'Product not found' });

    if (update === false) return res.status(400)
      .json({ message: 'Sold out product' })

    return res.status(200).json(update);
  } catch (error) {
    next(error)
  }
}

export default {
  getAllProducts,
  getById,
  deleteProduct,
  createProduct,
  updateProductsQuantity,
  updateBySale,
};
