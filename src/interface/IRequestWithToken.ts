import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IJWT extends JwtPayload {
  data?: string,
}

interface IRequestWithToken extends Request {
  tokenData?: string | IJWT,
}

export default IRequestWithToken;
