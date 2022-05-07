import { NextFunction, Request, Response } from "express";

async function createLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;

    const createUser = await true;// LoginService

    if (!createUser) return res.status(400).json({ message: 'Failed to create user' });

    return res.status(201).json(createUser);
  } catch (error) {
    next(error)
  }
};

export default { createLogin };
