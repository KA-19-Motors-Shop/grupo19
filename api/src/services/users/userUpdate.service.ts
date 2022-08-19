// import { compare, hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUser } from "../../interfaces/user.interfaces";

const updateUserService = async ({
  name,
  email,
  cpf,
  cel,
  birthDate,
  description,
}: IUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });
  if (!user) {
    throw new AppError("O usuário não foi encontrado", 404);
  }

  name ? (user.name = name) : user.name;
  email ? (user.email = email) : user.email;
  cpf ? (user.cpf = cpf) : user.cpf;
  cel ? (user.cel = cel) : user.cel;
  birthDate ? (user.birthDate = birthDate) : user.birthDate;
  description ? (user.description = description) : user.description;

  //   if (password) {
  //     const comparePassword = await compare(password, user.password as string);
  //     if (!comparePassword) {
  //       const hashedPassword = await hash(password, 8);
  //       user.password = hashedPassword;
  //     }
  //   }

  await userRepository.save(user);

  return user;
};

export default updateUserService;
