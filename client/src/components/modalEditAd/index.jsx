import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";

const ModalEditAd = () => {
  const { openCloseEditAd, openCloseModalExcludeAd} = useModal();

  return (
    <Modal
      closeModal={openCloseEditAd}
      headerTitle={"Editar Anúncio"}
      HeaderBody={
        <>
          <span>Tipo de anúncio</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button className="brand1" isBig fullWidth={true}>
              Venda
            </Button>
            <Button className="outline2" isBig fullWidth={true}>
              Leilão
            </Button>
          </div>
          <span>Informações do veículo</span>
          <Input label={"Título"} placeholder="Digitar título" name={"title"} />

          <div style={{ display: "flex", gap: "10px" }}>
            <Input label={"Ano"} placeholder="Digitar Ano" name={"year"} />
            <Input label={"Quilometrage"} placeholder="0" name={"kilometers"} />
            <Input label={"Preço"} placeholder="Digitar Preço" name={"price"} />
          </div>
          <Input
            isTextarea
            label={"Descrição"}
            placeholder="Digitar descrição"
            name={"description"}
          />

          <span>Tipo de Veículo</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button className="brand1" isBig fullWidth={true}>
              Carro
            </Button>
            <Button className="outline2" isBig fullWidth={true}>
              Moto
            </Button>
          </div>

          <span>Publicado</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button className="outline2" isBig fullWidth={true}>
              Sim
            </Button>
            <Button className="brand1" isBig fullWidth={true}>
              Não
            </Button>
          </div>

          <Input
            label={"Imagem da capa"}
            placeholder="Inserir URL da imagem"
            name={"img"}
          />
          <Input
            label={"1° Imagem da galeria"}
            placeholder="Inserir URL da imagem"
            name={"img"}
          />
          <Input
            label={"2° Imagem da galeria"}
            placeholder="Inserir URL da imagem"
            name={"img"}
          />

          <Button style={{ margin: "20px 0px 0 0" }} className="brandOpacity">
            Adicionar campo para imagem de galeria
          </Button>

          <div
            style={{
              textAlign: "end",
              margin: "24px 0 0 0",
              display: "flex",
              gap: "10px",
            }}
          >
            <Button
              onClick={()=>{
                openCloseEditAd()
                openCloseModalExcludeAd()
            }}
              isBig
              className="negative"
              style={{flex:'1'}}
            >
              Excluir Anúncio
            </Button>
            <Button isBig className="brandDisable">
              Salvar Alterações
            </Button>
          </div>
        </>
      }
    />
  );
};
export default ModalEditAd;
