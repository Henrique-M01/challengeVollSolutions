import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const SECRET = process.env.JWT_SECRET;

const JWT_CONFIG = {
  expiresIn: '1d',
};

export default function jwtGenerator(payload = {}): string {
  const token = jwt.sign({ data: payload },
    SECRET as string, JWT_CONFIG);

  return token;
}
