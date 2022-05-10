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

export default { getAllProducts };
