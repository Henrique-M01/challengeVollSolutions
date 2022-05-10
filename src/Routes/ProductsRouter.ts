import { Router } from 'express';
import authentication from '../middlewares/authentication';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();

productsRouter.get('/',
  authentication, ProductsController.getAllProducts);

productsRouter.get('/:id',
  authentication, ProductsController.getById);

productsRouter.delete('/:id',
  authentication, ProductsController.deleteProduct);

productsRouter.post('/:id',
  authentication, ProductsController.createProduct);

export default productsRouter;
