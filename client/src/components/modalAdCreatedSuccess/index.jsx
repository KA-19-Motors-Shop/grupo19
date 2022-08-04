import { useModal } from "../../Providers/modalProviders";
import Modal from "../modal";

const ModalAdCreatedSuccess = () => {
  const { openCloseCreatedSucsess } = useModal();
  return (
    <>
      <Modal
        headerTitle={"Sucesso!"}
        closeModal={openCloseCreatedSucsess}
        HeaderBody={
          <>
            <h6>Seu anúncio foi criado com sucesso!</h6>
            <p
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "28px",
                color: "var(--grey2)",
                margin: "20px 0 ",
              }}
            >
              Agora você poderá ver seus negócios crescendo em grande escala!
            </p>
          </>
        }
      />
    </>
  );
};
export default ModalAdCreatedSuccess;
