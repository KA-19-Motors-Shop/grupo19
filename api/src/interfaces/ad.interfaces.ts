export interface IAdCreate {
  type: string;
  title_car: string;
  year: string;
  quilometer: string;
  price: string;
  userId: string;
  details: string;
  show_ad: boolean;
  type_vehicule: string;
  cover_img: string;
  url: string[];
}
export interface IAdID {
  id: string;
}

export interface AdActivateDeactivate {
  user_id: string;
  ad_id: string;
}
