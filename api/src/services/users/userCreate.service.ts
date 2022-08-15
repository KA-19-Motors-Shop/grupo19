import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUserCreate } from "../../interfaces/user.interfaces";

const createUserService = async ({
  name,
  email,
  cpf,
  cel,
  birthDate,
  description,
  cep,
  state,
  city,
  street,
  number,
  complement,
  isAdvertiser,
  isBuyer,
  password,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const userFind = await userRepository.findOne({ where: { email } });

  if (userFind) {
    throw new AppError("Já existe usuário com esse email", 409);
  }

  const hashedPassword = await hash(password, 8);

  const user = new User();
  user.name = name;
  user.email = email;
  user.cpf = cpf;
  user.cel = cel;
  user.birthDate = birthDate;
  user.description = description;
  user.cep = cep;
  user.state = state;
  user.city = city;
  user.street = street;
  user.number = number;
  user.complement = complement;
  user.isBuyer = isBuyer;
  user.isAdvertiser = isAdvertiser;
  user.password = hashedPassword;

  userRepository.create(user);

  await userRepository.save(user);

  return user;
};

export default createUserService;
