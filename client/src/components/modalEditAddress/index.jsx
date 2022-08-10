import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

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


const ModalEditAddress = () => {
    const {openCloseEditAddress } = useModal()



    const schema = yup.object().shape({
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
    });
  
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm({
      resolver: yupResolver(schema),
    });

    const editAddress = (data)=>{
      console.log(data)

    }





    return (
    <>
      <Modal
        headerTitle={"Editar Endereço"}
        closeModal={openCloseEditAddress}
        HeaderBody={
          <form onSubmit={handleSubmit(editAddress)}>
            <span>Informações de endereço</span>
            <Input register={register}  error={errors?.cep} label={"CEP"} placeholder="00000.000" name={"cep"} />
            <div style={{ display: "flex", gap:'10px' }}>
              <Input register={register} error={errors?.state} label={"Estado"} placeholder="Ex: Paraná" name={"state"} />
              <Input register={register} error={errors?.city} label={"Cidade"} placeholder="Ex: Curitiba" name={"city"} />
            </div>
            <Input register={register} error={errors?.street} label={"Rua"} placeholder="Ex: Rua do Paraná" name={"street"} />
            <div style={{ display: "flex", gap:'10px'  }}>
              <Input type={"number"} register={register} error={errors?.number} label={"Número"} placeholder="Ex: 1029" name={"number"} />
              <Input register={register} error={errors?.complement} label={"Complemento"} placeholder="Ex: Casa" name={"complement"} />
            </div>
            <div style={{textAlign:'end', margin:'24px 0 0 0', display:'flex', flexWrap:"wrap", gap:"10px"}}>
                <Button onClick={openCloseEditAddress} isBig className="negative">Cancelar</Button>
                <Button isBig className="brandDisable">Salvar alterações</Button>
            </div>
          </form>
        }
      />
    </>
  );
};
export default ModalEditAddress;
