import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { LoginContainer } from "./style";

const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <form className="login-box">
        <h5>Login</h5>
        <Input
          label={"Usuário"}
          placeholder={"Digite usuário"}
          name={"username"}
        />
        <Input label={"Senha"} placeholder={"Digite senha"} name={"password"} />
        <span className="forgot-password">Esqueci minha senha</span>
        <Button isBig={true} fullWidth={true} className="brand1">
          Entrar
        </Button>
        <span className="dont-have-account">Ainda não possui conta?</span>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0,0)
            navigate("/cadastro");
          }}
          isBig
          fullWidth={true}
          className="outline2"
        >
          Cadastrar
        </Button>
      </form>
    </LoginContainer>
  );
};

export default Login;
