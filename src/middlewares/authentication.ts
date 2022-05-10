import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import IRequestWithToken from '../interface/IRequestWithToken';

config();

const SECRET = process.env.JWT_SECRET;

export default async (req: IRequestWithToken, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwt.verify(token, SECRET as string);

    req.tokenData = decoded;

    next();
  } catch (e) {
    next(e);
  }
};