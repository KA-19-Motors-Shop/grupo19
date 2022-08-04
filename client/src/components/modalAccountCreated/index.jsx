import { useNavigate } from "react-router-dom";
import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import Modal from "../modal";

const ModalAccountCreated = () => {
  const { openCloseAccountCreated } = useModal();
  const navigate = useNavigate();
  return (
    <>
      <Modal
        headerTitle={"Sucesso!"}
        closeModal={openCloseAccountCreated}
        HeaderBody={
          <>
              <h6>Sua conta foi criada com sucesso!</h6>
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
              <Button
                onClick={() => {
                  navigate("/login");
                  openCloseAccountCreated()
                  window.scrollTo(0, 0);
                }}
                isBig
                className="brand1"
              >
                Ir para o login
              </Button>
          </>
        }
      />
    </>
  );
};
export default ModalAccountCreated;