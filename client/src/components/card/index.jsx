import { Card, BackGroundImg, DataCar, Value } from "./styled";
import UserAdvertiser from "../userAdvertiser";

const Cards = ({img, title, details, user, KM, year,value }) => {
  return (
    <Card>
      <BackGroundImg>
        <img src={img} alt="" draggable={false} />
      </BackGroundImg>

      <h3>{title}</h3>
      <span>
        {details}
      </span>

      <UserAdvertiser userName={user} color='blue' />

      <DataCar>
        <div><p>{KM}</p></div>
        <div><p>{year}</p></div>
        <Value>{value}</Value>
      </DataCar>
    </Card>
  );
};

export default Cards;
