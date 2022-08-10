import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { Input } from "../../components/input";
import { LoginContainer } from "./style";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const Login = () => {

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório")
  })

  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  })

  const submitLogin = (data)=>{
    console.log(data)
  }


  const navigate = useNavigate();
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(submitLogin)} className="login-box">
        <h5>Login</h5>
        <Input
          // required={true}
          error={errors?.username}
          label={"Usuário"}
          placeholder={"Digite usuário"}
          name={"username"}
          register={register}
        />
        <Input
          // required={true}
          error={errors?.password}
          type={"password"}
          label={"Senha"}
          placeholder={"Digite senha"}
          name={"password"}
          register={register}
        />
        <span className="forgot-password">Esqueci minha senha</span>
        <Button isBig={true} fullWidth={true} className="brand1">
          Entrar
        </Button>
        <span className="dont-have-account">Ainda não possui conta?</span>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
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
