import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import Modal from "../modal";

const ModalExcludeAd = () => {
  const { openCloseModalExcludeAd } = useModal();
  return (
    <>
      <Modal
        headerTitle={"Excluir Anúncio"}
        closeModal={openCloseModalExcludeAd}
        HeaderBody={
          <>
            <h6>Tem certeza que deseja remover este anúncio?</h6>
            <p
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "28px",
                color: "var(--grey2)",
                margin: "20px 0 ",
              }}
            >
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </p>
            <div style={{ textAlign: "end", margin: "24px 0 0 0", display:'flex', flexWrap:"wrap", gap:"10px"}}>
              <Button
                isBig
                className="negative"
                // style={{ margin: "0 10px 0 0" }}
                onClick={openCloseModalExcludeAd}
              >
                Cancelar
              </Button>
              <Button isBig className="alert">
                Sim, excluir anúncio
              </Button>
            </div>
          </>
        }
      />
    </>
  );
};
export default ModalExcludeAd;
