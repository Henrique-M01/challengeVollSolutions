import { Router } from 'express';
import loginValidate from '../middlewares/loginValidate';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();

loginRouter.post('/create',
  loginValidate.validateLoginCreate , LoginController.createLogin );
loginRouter.post('/validate',
  loginValidate.validateLoginValidate , LoginController.loginValidate );

export default loginRouter;
