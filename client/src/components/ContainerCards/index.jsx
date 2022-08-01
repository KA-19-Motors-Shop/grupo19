import Cards from "../card";
import { Container, Main } from "./styled";
import useDraggableScroll from "use-draggable-scroll";
import { useRef } from "react";


const ContainerCards = ({ typeCard, arrayToRender}) => {
  const ref = useRef(null)

  const {onMouseDown} = useDraggableScroll(ref)

  return (
    <Main>
      <h5>{typeCard}</h5>
      <Container ref={ref} onMouseDown={onMouseDown}>
        {arrayToRender.map((item, index) => {
          return <Cards key={index} img={item.img} title={item.title} details={item.details} user={item.user} KM={item.KM} year={item.year} value={item.value}/>;
        })}
      </Container>
    </Main>
  );
};

export default ContainerCards;
