import Button from "../../components/button";
import { Input } from "../../components/input";
import { useModal } from "../../Providers/modalProviders";
import { RegisterContainer } from "./style";

const Register = () => {
  const {openCloseAccountCreated} = useModal()
  return (
    <RegisterContainer>
      <form className="register-box" onSubmit={(e)=>{
        e.preventDefault()
        openCloseAccountCreated()
      }}>
        <h5>Cadastro</h5>
        <span className="info">Informações pessoais</span>
        <Input label={"Nome"} placeholder={"Ex: Samuel Leão"} name={"name"} />
        <Input
          label={"Email"}
          placeholder={"Ex: samuel@kenzie.com.br"}
          name={"email"}
        />
        <Input label={"CPF"} placeholder={"000.000.000-00"} name={"cpf"} />
        <Input
          label={"Celular"}
          placeholder={"(DDD) 90000-0000"}
          name={"cel"}
        />
        <Input
          label={"Data de Nascimento"}
          placeholder={"00/00/00"}
          name={"birthdate"}
        />
        <Input
          label={"Descrição"}
          placeholder={"Digitar descrição"}
          name={"description"}
          isTextarea
        />

        <span className="info">Informações pessoais</span>

        <Input label={"CEP"} placeholder={"00000.000"} name={"cep"} />

        <div className="two-columns" style={{ display: "flex", gap: "10px" }}>
          <Input
            label={"Estado"}
            placeholder={"Digitar estado"}
            name={"state"}
          />
          <Input
            label={"Cidade"}
            placeholder={"Digitar cidade"}
            name={"city"}
          />
        </div>

        <Input label={"Rua"} placeholder={"Digite a rua"} name={"street"} />

        <div className="two-columns" style={{ display: "flex", gap: "10px" }}>
          <Input
            label={"Número"}
            placeholder={"Digitar número"}
            name={"number"}
          />
          <Input
            label={"Complemento"}
            placeholder={"Ex: apart 307"}
            name={"complement"}
          />
        </div>

        <span className="info">Tipo de conta</span>

        <div className="two-columns" style={{ display: "flex", gap: "10px" }}>
          <Button isBig fullWidth={true} className="brand1">
            Comprador
          </Button>
          <Button isBig fullWidth={true} className="outline2">
            Vendedor
          </Button>
        </div>

        <Input
            label={"Senha"}
            placeholder={"Digitar Senha"}
            name={"password"}
          />
          <Input
            label={"Confirmar Senha"}
            placeholder={"Digitar Senha"}
            name={"confirmPassword"}
          />

        <Button isBig fullWidth={true} className="brand1">
          Finalizar cadastro
        </Button>

      </form>
    </RegisterContainer>
  );
};

export default Register;
