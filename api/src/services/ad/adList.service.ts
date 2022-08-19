import { AppDataSource } from "../../data-source";
import { Ad } from "../../entities/ad.entity";

const listAdService = async () => {
  const adRepository = AppDataSource.getRepository(Ad);
  const ad = await adRepository.find();
  return ad;
};

export default listAdService;
