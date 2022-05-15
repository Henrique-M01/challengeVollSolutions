import { Router } from "express";
import UsersController from "../controllers/UsersController";
import authentication from "../middlewares/authentication";

const userRouter = Router();

userRouter.get('/',
  authentication, UsersController.getAllUsers);

export default userRouter;