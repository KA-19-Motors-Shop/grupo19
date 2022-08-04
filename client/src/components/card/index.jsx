import { Card, BackGroundImg, DataCar, Value } from "./styled";
import UserAdvertiser from "../userAdvertiser";
import Button from "../button";
import { useModal } from "../../Providers/modalProviders";

const Cards = ({ img, title, details, user, KM, year, value, isMyAd }) => {
  const {  openCloseEditAd } = useModal();
  return (
      <Card>
        <BackGroundImg>
          <img src={img} alt="" draggable={false} />
        </BackGroundImg>

        <h3>{title}</h3>
        <span>{details}</span>

        <UserAdvertiser userName={user} color="blue" />

        <DataCar>
          <div>
            <p>{KM}</p>
          </div>
          <div>
            <p>{year}</p>
          </div>
          <Value>{value}</Value>
        </DataCar>
        {isMyAd && (
          <div style={{ display: "flex", gap: "10px", margin: "20px 0 0" }}>
            <Button onClick={openCloseEditAd} className="outline1">Editar</Button>
            <Button className="outline1">Ver Como</Button>
          </div>
        )}
      </Card>
  );
};

export default Cards;
