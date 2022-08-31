/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */
import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import SessionController from "../controllers/sessions.controllers";
import loginValidation from "../schemas/session/loginValidation.schemas";

const sessionRouter = Router();

sessionRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: loginValidation }),
  SessionController.store
);
export default sessionRouter;
