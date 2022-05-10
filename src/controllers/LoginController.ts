import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService';

async function createLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;

    const createUser = await LoginService.createLogin(name, email, password);

    if (!createUser) return res.status(400).json({ message: 'User already exists' });

    return res.status(201).json(createUser);
  } catch (error) {
    next(error)
  }
};

async function loginValidate(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  const validateLogin = await LoginService.loginValidate(email, password);

  if (!validateLogin) return res.status(404).json({ message: 'Email or password invalid' });

  return res.status(200).json(validateLogin)
}

export default { createLogin, loginValidate };
