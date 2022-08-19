import { AppDataSource } from "src/data-source";
import { User } from "src/entities/user.entity";
import AppError from "src/errors/AppError";
import { IUserLogin } from "src/interfaces/user.interfaces";

import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

const sessionLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user) throw new AppError("Invalid e-mail/password!");

  const comparePwd = await bcrypt.compare(password, user.password);

  if (!comparePwd) throw new AppError("Invalid e-mail/password!");

  const token = jwt.sign({}, process.env.SECRET_KEY || "motorshopapi", {
    subject: user.id,
    expiresIn: "1d",
  });

  return { token, user };
};

export default sessionLoginService;
