import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
      <HeaderLogo src={logo} alt="logotipo kenzie motors" className="logo" />
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
        <HeaderButtons> Fazer login</HeaderButtons>
        <button>Cadastrar</button>
      </HeaderDivLogin>
    </HeaderStyled>
  );
};
export default Header;
