import { NextFunction, Request, Response } from "express";
import UserService from "../services/UserService";

async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const allUsers = await UserService.getAllUsers();

    if (!allUsers) return res.status(404).json({
      message: 'Users not found'
    })

    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
}

export default { getAllUsers };
