import { Router } from 'express';
import authentication from '../middlewares/authentication';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

productsRouter.get('/',
  authentication, ProductsController.getAllProducts);

productsRouter.get('/:id',
  authentication, ProductsController.getById);

productsRouter.delete('/:id',
  ProductsController.deleteProduct);

export default productsRouter;