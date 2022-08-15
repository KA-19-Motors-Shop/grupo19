export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserID {
  id: string;
}

export interface IUser extends IUserLogin {
  id: string;
  name: string;
  cpf: string;
  cel: string;
  birthDate: string;
  description: string;
}

export interface IUserCreate extends IUser {
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  isBuyer: boolean;
  isAdvertiser: boolean;
}
