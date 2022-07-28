import Header from "../../components/header";
import Button from "../../components/button";
import { ButtonHeader, H2Header, PHeader, SecundaryHeader } from "./style";
const PageProducts = () => {
  return (
    <>
      <Header />
      <SecundaryHeader>
        <H2Header>
          <h2>Velocidade e experiência em um lugar feito para você</h2>
        </H2Header>
        <PHeader>
          <p>Um ambiente feito para você explorar o seu melhor</p>
        </PHeader>
        <ButtonHeader>
          <Button className="brand1">Leilao</Button>
          <Button className="brand1">Carros</Button>
          <Button className="brand1">Motos</Button>
        </ButtonHeader>
      </SecundaryHeader>
    </>
  );
};
export default PageProducts;
