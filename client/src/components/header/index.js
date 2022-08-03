import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import {
  HeaderStyled,
  HeaderDivButtons,
  HeaderDivLogin,
  HeaderBurgerMenu,
} from "./style";
import logo from "../../assets/logo.png";
import UserAdvertiser from "../userAdvertiser";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  return (
    <HeaderStyled>
      <div className="container">
      <img
        src={logo}
        alt="logotipo kenzie motors"
        onClick={() => navigate("/")}
      />
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
          <UserAdvertiser userName={"Gabriel Rocha"} color={"blue"} />
          <div className="login-box-user">
            <div>Editar Perfil</div>
            <div>Editar Endereço</div>
            <div>Minhas Compras</div>
            <div onClick={()=>{
              localStorage.clear()
              navigate('/')  
            }}>Sair</div>
          </div>
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
      <HeaderBurgerMenu openDropDownMenu={openDropDownMenu}>
        <div onClick={() => setOpenDropDownMenu(!openDropDownMenu)}>
          {openDropDownMenu ? <GrClose /> : <FaBars />}
        </div>
          <div className="drop-down-menu">
            <div className="drop-down-menu-btn">
              <Button
                fullWidth={true}
                className="link"
                onClick={() => navigate("/carros")}
              >
                Carros
              </Button>
              <Button
                fullWidth={true}
                className="link"
                onClick={() => navigate("/motos")}
              >
                Motos
              </Button>
              <Button
                fullWidth={true}
                className="link"
                onClick={() => navigate("/leilao")}
              >
                Leilão
              </Button>
            </div>

            {localStorage.getItem("@Token") ? (
              <div className="menu-drop-down-user">
                <UserAdvertiser userName={"Gabriel"} color={"blue"} />
              </div>
            ) : (
              <div className="drop-down-menu-login">
                <Button
                  fullWidth={true}
                  className="link"
                  onClick={() => navigate("/leilao")}
                >
                  Login
                </Button>

                <Button
                  isBig
                  fullWidth={true}
                  className="outline1"
                  onClick={() => navigate("/leilao")}
                >
                  Cadastro
                </Button>
              </div>
            )}
          </div>
      </HeaderBurgerMenu>
      </div>
    </HeaderStyled>
  );
};
export default Header;
