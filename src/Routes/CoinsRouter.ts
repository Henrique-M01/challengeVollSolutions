import { Router } from 'express';
import CoinsController from '../controllers/CoinsController';

const coinsRouter = Router()

coinsRouter.get('/:id', CoinsController.getCoins);

export default coinsRouter;
