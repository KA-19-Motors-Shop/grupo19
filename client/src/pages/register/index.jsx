import Button from "../../components/button";
import { Input } from "../../components/input";
import { useModal } from "../../Providers/modalProviders";
import { RegisterContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const { openCloseAccountCreated } = useModal();

  const brazillianUFs = [
    "AC",
    "Al",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];



  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    cpf: yup.string().required("Campo obrigatório").length(14, "Cpf inválido"),
    cel: yup.string().required("Campo obrigatório").min(13, "Número inválido"),
    birthdate: yup.string().required("Campo obrigatório")
    .length(10, "Data inválida")
    .test("test-birthdate", "Você precisa ser maior de idade",
    (value)=>{
      const [year, month, day] = value.split('-')
      const now = new Date()
      const birthYear = Number(year)
      const birthMonth = Number(month)
      const birthDay = Number(day)
      const nowDay = now.getDate()
      const nowMonth = now.getMonth() + 1
      const nowYear = now.getFullYear()
      if((nowYear-birthYear) > 18) return true
      if((nowYear-birthYear) === 18 && birthMonth < nowMonth) return true 
      if((nowYear-birthYear) === 18 && birthMonth === nowMonth && birthDay <= nowDay) return true 
      return false
    }),
    description: yup.string().required("Campo obrigatório"),
    cep: yup.string().required("Campo obrigatório").length(9,'Cep inválido').test("test-cep", "Esse CEP não existe", 
    async (value)=>{
      let cepValid = false
      if(value.length===9){
        
        const baseUrlCep = `https://viacep.com.br/ws/${value.replace('-', '')}/json/`

        await axios.get(baseUrlCep).then(res=>{
          const data =  res.data?.erro
          if(!data) cepValid=true
        }).catch(err=>console.log(err))
        return cepValid
      }
      return false
      
    }),
    state: yup.string().required("Campo obrigatório").test("test-state", "Esse estado não existe",
    (value)=> brazillianUFs.includes(value.toUpperCase()) ),
    street: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    complement: yup.string(),
    password: yup.string().required("Campo obrigatório")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/,"É necessário no mínimo uma letra maiúscula e minúscula e um caracter especial"),
    confirmPassword: yup.string().required("Campo obrigatório").oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  });

  const [isBuyer, setIsBuyer] = useState(true)
  const [isAdvertiser, setIsAdvertiser] = useState(false)

  const {register,formState: { errors },handleSubmit} = useForm({
    resolver: yupResolver(schema),
  });

  const submitRegisterData = (data) => {
    console.log({...data, isBuyer, isAdvertiser});
    openCloseAccountCreated();
  };

  return (
    <RegisterContainer>
      <form
        className="register-box"
        onSubmit={handleSubmit(submitRegisterData)}
      >
        <h5>Cadastro</h5>
        <span className="info">Informações pessoais</span>
        <Input
          register={register}
          label={"Nome"}
          placeholder={"Ex: Samuel Leão"}
          name={"name"}
          error={errors?.name}
        />
        <Input
          label={"Email"}
          register={register}
          placeholder={"Ex: samuel@kenzie.com.br"}
          name={"email"}
          error={errors?.email}
        />
        <Input
          register={register}
          label={"CPF"}
          placeholder={"000.000.000-00"}
          name={"cpf"}
          error={errors?.cpf}
        />
        <Input
          label={"Celular"}
          register={register}
          placeholder={"(DDD) 90000-0000"}
          name={"cel"}
          error={errors?.cel}
        />
        <Input
          label={"Data de Nascimento"}
          placeholder={"00/00/0000"}
          register={register}
          name={"birthdate"}
          type={"date"}
          error={errors?.birthdate}
        />
        <Input
          label={"Descrição"}
          placeholder={"Digitar descrição"}
          name={"description"}
          register={register}
          isTextarea
          error={errors?.description}
        />

        <span className="info">Informações pessoais</span>

        <Input
          register={register}
          label={"CEP"}
          placeholder={"00000-000"}
          name={"cep"}
          error={errors?.cep}
        />

        <div className="two-columns" style={{ display: "flex", gap: "10px" }}>
          <Input
            register={register}
            label={"Estado"}
            placeholder={"Digitar estado"}
            name={"state"}
            error={errors?.state}
          />
          <Input
            register={register}
            label={"Cidade"}
            placeholder={"Digitar cidade"}
            name={"city"}
            error={errors?.city}
          />
        </div>

        <Input
          register={register}
          label={"Rua"}
          placeholder={"Digite a rua"}
          name={"street"}
          error={errors?.street}
        />

        <div className="two-columns" style={{ display: "flex", gap: "10px" }}>
          <Input
            register={register}
            label={"Número"}
            placeholder={"Digitar número"}
            name={"number"}
            error={errors?.number}
            type={"number"}
          />
          <Input
            register={register}
            label={"Complemento"}
            placeholder={"Ex: apart 307"}
            name={"complement"}
            error={errors?.complement}
          />
        </div>

        <span className="info">Tipo de conta</span>

        <div className="two-columns" style={{ display: "flex", gap: "10px" }}>
          <Button isBig fullWidth={true} className={isBuyer ? "brand1" : "outline2"} onClick={(e)=>{
              e.preventDefault()
              setIsBuyer(true)
              setIsAdvertiser(false)
          }}>
            Comprador
          </Button>
          <Button isBig fullWidth={true} className={isBuyer ? "outline2" : "brand1"} onClick={(e)=>{
              e.preventDefault()
              setIsBuyer(false)
              setIsAdvertiser(true)
          }}>
            Vendedor
          </Button>
        </div>

        <Input
          label={"Senha"}
          placeholder={"Digitar Senha"}
          type={"password"}
          register={register}
          name={"password"}
          error={errors?.password}
        />
        <Input
          label={"Confirmar Senha"}
          type={"password"}
          placeholder={"Digitar Senha"}
          name={"confirmPassword"}
          register={register}
          error={errors?.confirmPassword}
        />

        <Button isBig fullWidth={true} className="brand1">
          Finalizar cadastro
        </Button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
