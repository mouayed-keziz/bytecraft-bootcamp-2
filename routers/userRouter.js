import { Router } from "express";
import { get_all_users, create_user } from "../controllers/userController.js";

const userRouter = Router();


userRouter.get("/all", get_all_users)
userRouter.post("/create-user", create_user)

export default userRouter;