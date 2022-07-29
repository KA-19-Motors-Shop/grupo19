import Cards from "../card";
import { Container, Main } from "./styled";

const ContainerCards = ({ typeCard, arrayToRender}) => {

  return (
    <Main>
      <h5>{typeCard}</h5>
      <Container>
        {arrayToRender.map((item, index) => {
          return <Cards key={index} img={item.img} title={item.title} details={item.details} user={item.user} KM={item.KM} year={item.year} value={item.value}/>;
        })}
      </Container>
    </Main>
  );
};

export default ContainerCards;
