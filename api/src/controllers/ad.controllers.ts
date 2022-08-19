import { Request, Response } from "express";
import createAdService from "@services/ad/adCreate.service";
import listAdService from "@services/ad/adList.service";
import deleteAdService from "@services/ad/adDelete.service";
import updateAdService from "@services/ad/adUpdate.service";

export default class AdController {
  // static async store(req: Request, res: Response) {
  //   const {}}

  static async index(req: Request, res: Response) {
    const ad = await listAdService();

    return res.json(ad);
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
