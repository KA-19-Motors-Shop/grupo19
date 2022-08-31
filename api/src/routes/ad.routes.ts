import { Router } from "express";
import AdController from "../controllers/ad.controllers";

const adRouter = Router();

adRouter.post("/", AdController.store);
adRouter.get("/", AdController.index);
adRouter.patch("/:user_id/:ad_id/", AdController.activateDeactivate);

export default adRouter;
