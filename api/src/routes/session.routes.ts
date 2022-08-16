/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/unbound-method */
import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import SessionController from "src/controllers/sessions.controllers";
import loginValidation from "src/schemas/session/loginValidation.schemas";

const sessionRouter = Router();

sessionRouter.post(
  "/",
  expressYupMiddleware({ schemaValidator: loginValidation }),
  SessionController.store
);
