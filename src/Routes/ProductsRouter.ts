import { Router } from 'express';
import authentication from '../middlewares/authentication';
import ProductsController from '../controllers/ProductsController';
import productsValidate from '../middlewares/productsValidate';

const productsRouter = Router();

productsRouter.get('/',
  authentication, ProductsController.getAllProducts);

productsRouter.get('/:id',
  authentication, ProductsController.getById);

productsRouter.delete('/:id',
  authentication, ProductsController.deleteProduct);

productsRouter.post('/',
  authentication, productsValidate.validateLoginCreate, ProductsController.createProduct);

productsRouter.put('/:id', 
  authentication, ProductsController.updateProducts);

productsRouter.put('/sale/:id',
  ProductsController.updateBySale)

export default productsRouter;
