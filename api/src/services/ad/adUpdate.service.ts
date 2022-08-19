// import { compare, hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Ad } from "../../entities/ad.entity";
import AppError from "../../errors/AppError";
import { IAdCreate } from "../../interfaces/ad.interfaces";

const updateAdService = async ({
  type,
  title_car,
  year,
  quilometer,
  price,
  details,
  type_vehicule,
  cover_img,
  url,
}: IAdCreate) => {
  const adRepository = AppDataSource.getRepository(Ad);
  const ad = await adRepository.findOne({ where: { title_car } });
  if (!ad) {
    throw new AppError("O anuncio não foi encontrado", 404);
  }

  type ? (ad.type = type) : ad.type;
  title_car ? (ad.title_car = title_car) : ad.title_car;
  year ? (ad.year = year) : ad.year;
  quilometer ? (ad.quilometer = quilometer) : ad.quilometer;
  price ? (ad.price = price) : ad.price;
  details ? (ad.details = details) : ad.details;
  type_vehicule ? (ad.type_vehicule = type_vehicule) : ad.type_vehicule;
  cover_img ? (ad.cover_img = cover_img) : ad.cover_img;
  url ? (ad.url = url) : ad.url;

  await adRepository.save(ad);

  return ad;
};

export default updateAdService;
