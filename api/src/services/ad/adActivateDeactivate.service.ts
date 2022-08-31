import { AppDataSource } from "../../data-source";
import { Ad } from "../../entities/ad.entity";
import { AdActivateDeactivate } from "../../interfaces/ad.interfaces";
import AppError from "../../errors/AppError";
import { User } from "../../entities/user.entity";

const activateDeactivateAdService = async ({
  ad_id,
  user_id,
}: AdActivateDeactivate) => {
  const adRepository = AppDataSource.getRepository(Ad);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: user_id } });

  if (!user) {
    throw new AppError("O usuario não foi encontrado", 404);
  }

  const ad = await adRepository.findOne({ where: { id: ad_id } });

  if (!ad) {
    throw new AppError("O anuncio não foi encontrado", 404);
  }

  if (ad.show_ad) {
    ad.show_ad = false;
  } else {
    ad.show_ad = true;
  }

  await adRepository.save(ad);

  return ad;
};

export default activateDeactivateAdService;
