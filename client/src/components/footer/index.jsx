import { FooterContainer } from "./style";
import LogoMotorShop from "../../assets/MotorsShop.svg";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <figure>
          <figcaption>Logo Motor Shop</figcaption>
          <img src={LogoMotorShop} alt="Logo Motor Shop" />
        </figure>
        <span>&copy; 2022 - Todos os direitos reservados.</span>

        <div onClick={() => window.scrollTo(0, 0)} className="scrollUpIcon">
          <FaAngleUp />
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
