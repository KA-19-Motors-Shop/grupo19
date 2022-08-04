import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";

const ModalEditProfile = () => {
    const {openCloseEditProfile } = useModal()
    return (
    <>
      <Modal
        headerTitle={"Editar Perfil"}
        closeModal={openCloseEditProfile}
        HeaderBody={
          <>
            <span>Informações pessoais</span>
            <Input label={"Nome"} placeholder="Ex: Samuel" name={"name"} />
            <Input label={"Email"} placeholder="Ex: samuel@gmail.com" name={"email"} />
            <Input label={"CPF"} placeholder="Ex: 000.000.000-00" name={"cpf"} />
            <Input label={"Celular"} placeholder="Ex: (00)99999-9999" name={"tel"} />
            <Input label={"Data de nascimento"} placeholder="Ex: 09/12/1999" name={"birth_date"} />
            <Input isTextarea label={"Descrição"} placeholder="Ex: Insira a descrição" name={"description"} />
            
            
            <div style={{textAlign:'end', margin:'24px 0 0 0'}}>
                <Button onClick={openCloseEditProfile} isBig className="negative" style={{margin:'0 10px 0 0'}}>Cancelar</Button>
                <Button isBig className="brandDisable">Salvar alterações</Button>
            </div>
          </>
        }
      />
    </>
  );
};
export default ModalEditProfile;