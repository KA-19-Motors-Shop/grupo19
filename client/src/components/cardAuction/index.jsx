import UserAdvertiser from "../userAdvertiser";
import { Card, DataCar, Details, Hours, InfoCard } from "./styled";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const CardAuction = ({ timer, img, title, details, user, year, KM, value }) => {
  return (
    <Card>
      <img src={img} alt="" />
      <InfoCard>
        <Hours>
          <MdOutlineWatchLater color="#4529E6" size={28} />
          <p>{timer}</p>
        </Hours>
        <h6>{title}</h6>
        <Details>
          {details}
        </Details>
        <UserAdvertiser
          userName={user}
          color="blue"
          isWhite={true}
        />
        <DataCar>
          <div>
            <p>{year}</p>
          </div>
          <div>
            <p>{KM}</p>
          </div>
        </DataCar>

        <p className="Value">{value}</p>
      </InfoCard>

      <button>
        <p>Acessar página do leilão</p>
        <BsArrowRight color="#FFFFFF" size="25" />
      </button>
    </Card>
  );
};

export default CardAuction;
