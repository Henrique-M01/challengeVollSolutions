import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();

loginRouter.post('/create', LoginController.createLogin );

export default loginRouter;
