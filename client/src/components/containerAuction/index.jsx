
import CardAuction from "../cardAuction";
import { Container, Main } from "./styled";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";



const ContainerAuction = ({ arrayTorender }) => {
  const ref = useRef(null)

  const {onMouseDown} = useDraggableScroll(ref)
  
  return (
    <Main>
      <h5>Leilão </h5>
      <Container ref={ref} onMouseDown={onMouseDown}>
        {arrayTorender.map((item,index) => {
          return <CardAuction key={index} timer={item.timer} img={item.img} title={item.title} details={item.details} user={item.user} KM={item.KM} year={item.year} value={item.value}/>
        })}
        
      </Container>
    </Main>
  );
};


export default ContainerAuction