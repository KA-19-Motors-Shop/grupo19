import Header from "../../components/header";
import { H2Header, PHeader, ButtonHeader } from "./style";
import { SecundaryHeader } from "./style";
import ContainerCards from "../../components/ContainerCards";
import Button from "../../components/button";
import ContainerAuction from "../../components/containerAuction";
import { arrayAuction, arrayCars } from "../../arraysTest";


const PageProducts = () => {


  return (
    <>
      <SecundaryHeader>
        <H2Header>
          <h2>Velocidade e experiência em um lugar feito para você</h2>
        </H2Header>
        <PHeader>
          <p>Um ambiente feito para você explorar o seu melhor</p>
        </PHeader>
        <ButtonHeader>
          <Button className="brand1">Leilão</Button>
          <Button className="brand1">Carros</Button>
          <Button className="brand1">Motos</Button>
        </ButtonHeader>
      </SecundaryHeader>
      <ContainerAuction arrayTorender={arrayAuction}/>
      <ContainerCards arrayToRender={arrayCars} typeCard='Carros' />
      <ContainerCards arrayToRender={arrayCars} typeCard='Motos' />
    </>
  );
};
export default PageProducts;
