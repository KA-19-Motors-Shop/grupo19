/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */
import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import UserController from "src/controllers/users.controllers";
import userCreateValidation from "src/schemas/user/userCreateValidation.schema";
// import loginValidation from "src/schemas/session/loginValidation.schemas";

const userRouter = Router();

userRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: userCreateValidation }),
  UserController.store
);
export default userRouter;
