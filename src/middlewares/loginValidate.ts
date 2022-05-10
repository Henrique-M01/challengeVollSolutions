import { NextFunction, Request, Response } from 'express';
import loginValidateSchema from '../schemas/loginValidateSchema';
import loginCreateSchema from '../schemas/loginCreateSchema'

async function validateLoginCreate(req: Request, _res: Response, next: NextFunction) {
  try {
    await loginCreateSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    next(e);
  }
}

async function validateLoginValidate(req: Request, _res: Response, next: NextFunction) {
  try {
    await loginValidateSchema.validateAsync(req.body);

    return next();
  } catch (e) {
    next(e);
  }
}

export default { validateLoginCreate, validateLoginValidate };