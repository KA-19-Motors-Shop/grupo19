import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import {
  HeaderStyled,
  HeaderLogo,
  HeaderButtons,
  HeaderDivButtons,
  HeaderDivLogin,
} from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <HeaderLogo className="logo">
        <img src={logo} alt="logotipo kenzie motors" />
      </HeaderLogo>
      <HeaderDivButtons>
        <HeaderButtons onClick={() => navigate("/carros")}>
          Carros
        </HeaderButtons>

        <HeaderButtons onClick={() => navigate("/motos")}>Motos</HeaderButtons>
        <HeaderButtons onClick={() => navigate("/leilao")}>
          Leilão
        </HeaderButtons>
      </HeaderDivButtons>
      <HeaderDivLogin>
        <HeaderButtons onClick={() => navigate("/login")}>
          {" "}
          Fazer login
        </HeaderButtons>
        <Button className="light" onClick={() => navigate("/cadastro")}>
          Cadastrar
        </Button>
      </HeaderDivLogin>
    </HeaderStyled>
  );
};
export default Header;
