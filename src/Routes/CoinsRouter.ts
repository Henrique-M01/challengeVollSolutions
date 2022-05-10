import { Router } from 'express';
import authentication from '../middlewares/authentication';
import CoinsController from '../controllers/CoinsController';

const coinsRouter = Router()

coinsRouter.get('/:id',
  authentication, CoinsController.getCoins);

coinsRouter.put('/:id',
  CoinsController.updateCoins);

export default coinsRouter;
