import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { HeaderStyled, HeaderDivButtons, HeaderDivLogin } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <img src={logo} alt="logotipo kenzie motors" />
      <HeaderDivButtons>
        <Button className="negative" onClick={() => navigate("/carros")}>
          Carros
        </Button>
        <Button className="negative" onClick={() => navigate("/motos")}>
          Motos
        </Button>
        <Button className="negative" onClick={() => navigate("/leilao")}>
          Leilão
        </Button>
      </HeaderDivButtons>
      {localStorage.getItem("@Token") ? (
        <HeaderDivLogin>
          <p>nome do usuario</p>
        </HeaderDivLogin>
      ) : (
        <HeaderDivLogin>
          <Button className="negative" onClick={() => navigate("/login")}>
            {" "}
            Fazer login
          </Button>
          <Button className="light" onClick={() => navigate("/cadastro")}>
            Cadastrar
          </Button>
        </HeaderDivLogin>
      )}
    </HeaderStyled>
  );
};
export default Header;
