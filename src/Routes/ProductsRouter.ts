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

productsRouter.post('/:id',
  authentication, productsValidate.validateLoginCreate, ProductsController.createProduct);

productsRouter.put('/:id', 
  authentication, ProductsController.updateProductsQuantity);

productsRouter.put('/sale/:id',
  ProductsController.updateBySale)

export default productsRouter;
