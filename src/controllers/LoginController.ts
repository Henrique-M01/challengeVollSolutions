import { NextFunction, Request, Response } from "express";
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

export default { createLogin };
