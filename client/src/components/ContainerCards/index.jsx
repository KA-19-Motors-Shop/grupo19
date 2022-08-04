import Cards from "../card";
import { Container, Main } from "./styled";
import useDraggableScroll from "use-draggable-scroll";
import { useRef } from "react";

const ContainerCards = ({ typeCard, arrayToRender, isMyAd=false }) => {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <Main>
      <h5>{typeCard}</h5>
      <Container ref={ref} onMouseDown={onMouseDown}>
        {arrayToRender.map((item, index) => {
          return (
            <Cards
              isMyAd={isMyAd}
              key={index}
              img={item.img}
              title={item.title}
              details={item.details}
              user={item.user}
              KM={item.KM}
              year={item.year}
              value={item.value}
              />
          );
        })}
      </Container>
    </Main>
  );
};

export default ContainerCards;
