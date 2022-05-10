import { Router } from 'express';
import coinsRouter from './CoinsRouter';
import loginRouter from './LoginRouter';
import productsRouter from './ProductsRouter';

const indexRouter = Router();

indexRouter.use('/login', loginRouter);
indexRouter.use('/products', productsRouter);
indexRouter.use('/coins', coinsRouter);

export default indexRouter
