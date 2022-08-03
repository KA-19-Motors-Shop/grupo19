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
        <Button className="link" onClick={() => navigate("/carros")}>
          Carros
        </Button>
        <Button className="link" onClick={() => navigate("/motos")}>
          Motos
        </Button>
        <Button className="link" onClick={() => navigate("/leilao")}>
          Leilão
        </Button>
      </HeaderDivButtons>
      {localStorage.getItem("@Token") ? (
        <HeaderDivLogin>
          <p>nome do usuario</p>
        </HeaderDivLogin>
      ) : (
        <HeaderDivLogin>
          <Button className="link" onClick={() => navigate("/login")}>
            {" "}
            Fazer login
          </Button>
          <Button className="outline1" onClick={() => navigate("/cadastro")}>
            Cadastrar
          </Button>
        </HeaderDivLogin>
      )}
    </HeaderStyled>
  );
};
export default Header;
