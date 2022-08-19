import sessionLoginService from "@services/sessions/sessionLogin.service";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

export default class SessionController {
  static async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const login = await sessionLoginService({ email, password });

    return res.status(200).json(instanceToPlain(login));
  }
}
