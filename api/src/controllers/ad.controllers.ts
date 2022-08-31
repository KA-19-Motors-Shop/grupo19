import { Request, Response } from "express";
import createAdService from "../services/ad/adCreate.service";
import listAdService from "../services/ad/adList.service";
import deleteAdService from "../services/ad/adDelete.service";
import activateDeactivateAdService from "../services/ad/adActivateDeactivate.service";
// import updateAdService from "@services/ad/adUpdate.service";

export default class AdController {
  static async store(req: Request, res: Response) {
    const {
      type,
      title_car,
      year,
      quilometer,
      price,
      userId,
      details,
      show_ad,
      type_vehicule,
      cover_img,
      url,
    } = req.body;

    const user = await createAdService({
      type,
      title_car,
      year,
      quilometer,
      price,
      userId,
      details,
      show_ad,
      type_vehicule,
      cover_img,
      url,
    });

    return res.status(201).json(user);
  }
  static async index(req: Request, res: Response) {
    const ad = await listAdService();

    return res.json(ad);
  }

  static async activateDeactivate(req: Request, res: Response) {
    const { user_id, ad_id } = req.params;
    const ad = await activateDeactivateAdService({ user_id, ad_id });

    return res.status(204).json(ad);
  }

  //   static async update(req: Request, res: Response) {
  //     const users = await listUsersService();

  //     return res.json(users);
  //   }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteAdService({ id });

    return res.status(204).json();
  }
}
