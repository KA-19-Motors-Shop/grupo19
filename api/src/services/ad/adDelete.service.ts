import { AppDataSource } from "../../data-source";
import { Ad } from "../../entities/ad.entity";
import AppError from "../../errors/AppError";
import { IAdID } from "../../interfaces/ad.interfaces";

const deleteAdService = async ({ id }: IAdID) => {
  const adRepository = AppDataSource.getRepository(Ad);
  const ad = await adRepository.findOne({ where: { id } });

  if (!ad) {
    throw new AppError("O anuncio não foi encontrado", 404);
  }

  return await adRepository.delete(id);
};

export default deleteAdService;
