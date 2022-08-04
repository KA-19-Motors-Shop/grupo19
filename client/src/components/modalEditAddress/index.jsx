import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";

const ModalEditAddress = () => {
    const {openCloseEditAddress } = useModal()
    return (
    <>
      <Modal
        headerTitle={"Editar Endereço"}
        closeModal={openCloseEditAddress}
        HeaderBody={
          <>
            <span>Informações de endereço</span>
            <Input label={"CEP"} placeholder="00000.000" name={"CEP"} />
            <div style={{ display: "flex", gap:'10px' }}>
              <Input label={"Estado"} placeholder="Ex: Paraná" name={"state"} />
              <Input label={"Cidade"} placeholder="Ex: Curitiba" name={"city"} />
            </div>
            <Input label={"Rua"} placeholder="Ex: Rua do Paraná" name={"street"} />
            <div style={{ display: "flex", gap:'10px'  }}>
              <Input label={"Número"} placeholder="Ex: 1029" name={"number"} />
              <Input label={"Complemento"} placeholder="Ex: Casa" name={"complement"} />
            </div>
            <div style={{textAlign:'end', margin:'24px 0 0 0'}}>
                <Button onClick={openCloseEditAddress} isBig className="negative" style={{margin:'0 10px 0 0'}}>Cancelar</Button>
                <Button isBig className="brandDisable">Salvar alterações</Button>
            </div>
          </>
        }
      />
    </>
  );
};
export default ModalEditAddress;
