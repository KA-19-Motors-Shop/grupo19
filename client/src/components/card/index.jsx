import CarImg from "../../assets/car1.png";
import { Card, BackGroundImg, DataUser, DataCar, Value } from "./styled";

const Cards = ({img, title, details, user, KM, year,value }) => {
  return (
    <Card>
      <BackGroundImg>
        <img src={img} alt="" />
      </BackGroundImg>

      <h3>{title}</h3>
      <span>
        {details}
      </span>

      <DataUser>
        <div>
          <p>SL</p>
        </div>
        <span>{user}</span>
      </DataUser>

      <DataCar>
        
        <div><p>{KM}</p></div>
        <div><p>{year}</p></div>
        <Value>{value}</Value>
      </DataCar>
    </Card>
  );
};

export default Cards;
