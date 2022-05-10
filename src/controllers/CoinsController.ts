import { NextFunction, Request, Response } from 'express';
import CoinsService from '../services/CoinsService';

async function getCoins(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const coins = await CoinsService.getCoins(Number(id));

    if (!coins) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json({ coins });
  } catch (error) {
    next(error);
  }
};

async function updateCoins(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { coins } = req.body;

    const update = await CoinsService.updateCoins(Number(id), coins);

    if (update === null) return res.status(404).json({
      message: 'User not found' });

    return res.status(200).json({ coins: update });
  } catch (error) {
    next(error);
  }
}

export default { getCoins, updateCoins };