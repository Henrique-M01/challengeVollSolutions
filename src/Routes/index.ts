import { Router } from 'express';
import loginRouter from './LoginRouter';

const indexRouter = Router();

indexRouter.use(loginRouter);

export default indexRouter