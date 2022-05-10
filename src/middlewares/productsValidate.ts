import { NextFunction, Response, Request } from 'express';
import productsCreateSchema from '../schemas/productsCreateSchema';

async function validateLoginCreate(req: Request, _res: Response, next: NextFunction) {
  try {
    await productsCreateSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    next(e);
  }
}

export default { validateLoginCreate };
