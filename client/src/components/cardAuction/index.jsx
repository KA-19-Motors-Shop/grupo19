import UserAdvertiser from "../userAdvertiser";
import { Card, DataCar, Details, Hours, InfoCard } from "./styled";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";



const CardAuction = ({ timer, img, title, details, user, year, KM, value }) => {
  return (
    <Card img={img}>
      <img src={img} alt="Product Car" />
      <div className="bg-image">

      <InfoCard>
        <Hours>
          <MdOutlineWatchLater color="#4529E6" size={28} />
          <p>{timer}</p>
        </Hours>
        <h6>{title}</h6>
        <Details>{details}</Details>
        <UserAdvertiser userName={user} color="blue" isWhite={true} />
        <DataCar>
          <div className="data_car_btn_section">
            <div className="data_car_btn">
              <p>{year}</p>
            </div>
            <div className="data_car_btn">
              <p>{KM}</p>
            </div>
          </div>

          <p className="Value">{value}</p>
        </DataCar>
      </InfoCard>

      <button>
        <p>Acessar página do leilão</p>
        <BsArrowRight color="#FFFFFF" size="25" />
      </button>


      </div>

    </Card>
  );
};

export default CardAuction;
