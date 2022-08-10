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
import { useModal } from "../../Providers/modalProviders";
import ModalEditAddress from "../modalEditAddress";
import ModalCreateAd from "../modalCreateAd";
import ModalEditProfile from "../modalEditProfile";

const Header = () => {
  const navigate = useNavigate();
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const {
    openModalEditAddress,
    openCloseEditAddress,
    openModalEditProfile,
    openCloseEditProfile,
  } = useModal();

  return (
    <>
      {openModalEditAddress && <ModalEditAddress />}
      {openModalEditProfile && <ModalEditProfile/>}
      <HeaderStyled>
        <div className="container">
          <img
            src={logo}
            alt="logotipo kenzie motors"
            onClick={() =>{
              navigate("/")
              window.scrollTo(0,0)
              setOpenDropDownMenu(false)
            }}
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
                <div onClick={openCloseEditProfile}>Editar Perfil</div>
                <div onClick={openCloseEditAddress}>Editar Endereço</div>
                <div>Minhas Compras</div>
                <div
                  onClick={() => {
                    localStorage.clear();
                    window.scrollTo(0,0)
                    navigate("/");
                  }}
                >
                  Sair
                </div>
              </div>
            </HeaderDivLogin>
          ) : (
            <HeaderDivLogin>
              <Button
                style={{ margin: "0 0 0 10px" }}
                className="link"
                onClick={() => navigate("/login")}
              >
                {" "}
                Fazer login
              </Button>
              <Button
                className="outline1"
                onClick={() => navigate("/cadastro")}
              >
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
                  <UserAdvertiser className="user-icon-mobile" userName={"Gabriel"} color={"blue"} />
                  <div className="login-box-user">
                    <div onClick={openCloseEditProfile}>Editar Perfil</div>
                    <div onClick={openCloseEditAddress}>Editar Endereço</div>
                    <div>Minhas Compras</div>
                    <div
                      onClick={() => {
                        localStorage.clear();
                        window.scrollTo(0,0)
                        navigate("/");
                      }}
                    >
                      Sair
                    </div>
                  </div>
                </div>
              ) : (
                <div className="drop-down-menu-login">
                  <Button
                    fullWidth={true}
                    className="link"
                    onClick={() =>{
                      navigate("/login")
                      window.scrollTo(0,0)
                      setOpenDropDownMenu(false)
                    }}
                  >
                    Login
                  </Button>

                  <Button
                    isBig
                    fullWidth={true}
                    className="outline1"
                    onClick={() =>{
                      navigate("/cadastro")
                      window.scrollTo(0,0)
                      setOpenDropDownMenu(false)
                    }}
                  >
                    Cadastro
                  </Button>
                </div>
              )}
            </div>
          </HeaderBurgerMenu>
        </div>
      </HeaderStyled>
    </>
  );
};
export default Header;
