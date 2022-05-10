import { Router } from 'express';
import loginRouter from './LoginRouter';
import productsRouter from './ProductsRouter';

const indexRouter = Router();

indexRouter.use('/login', loginRouter);
indexRouter.use('/products', productsRouter);

export default indexRouter
