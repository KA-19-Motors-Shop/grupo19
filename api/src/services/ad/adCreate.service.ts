import { AppDataSource } from "../../data-source";
import { Ad } from "../../entities/ad.entity";
import { IAdCreate } from "../../interfaces/ad.interfaces";

const createAdService = async ({
  type,
  title_car,
  year,
  quilometer,
  price,
  userId,
  details,
  show_ad,
  type_vehicule,
  cover_img,
  url,
}: IAdCreate) => {
  const adRepository = AppDataSource.getRepository(Ad);

  const ad = new Ad();
  ad.type = type;
  ad.title_car = title_car;
  ad.year = year;
  ad.quilometer = quilometer;
  ad.price = price;
  ad.user = userId;
  ad.details = details;
  ad.show_ad = show_ad;
  ad.type_vehicule = type_vehicule;
  ad.cover_img = cover_img;
  ad.url = url;

  adRepository.create(ad);

  await adRepository.save(ad);

  return ad;
};

export default createAdService;
