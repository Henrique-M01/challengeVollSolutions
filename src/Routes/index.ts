import { Router } from 'express';
import loginRouter from './LoginRouter';

const indexRouter = Router();

indexRouter.use('/login', loginRouter);

export default indexRouter