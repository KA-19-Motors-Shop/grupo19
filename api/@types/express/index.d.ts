import * as express from "express";
import {
  IUserLogin,
  IUserID,
  IUser,
  IUserCreate,
} from "../../src/interfaces/user.interfaces";
import { IAdCreate, AdId } from "../../src/interfaces/ad.interfaces";
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      validCreateUser: IUserCreate;
      validAd: IAdCreate;
    }
  }
}
