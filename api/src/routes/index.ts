import { Router } from "express";
import sessionRouter from "./session.routes";
import userRouter from "./user.routes";
import adRouter from "./ad.routes";

const routes = Router();

routes.use("/sessions", sessionRouter);
routes.use("/user", userRouter);
routes.use("/ad", adRouter);

export default routes;
