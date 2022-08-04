import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import ModalCreateAd from "../modalCreateAd";
import { AdvertiserContainer } from "./style";

const AdvertiserProfileCard = ({ name, description, isMyAd = false }) => {
  const { openModalCreateAd, openCloseCreateAd } = useModal();
  return (
    <>
    {openModalCreateAd && <ModalCreateAd/>}
      <AdvertiserContainer>
        <div className="blue-bg-container">
          <div className="advertiser-box">
            <div className="circle">
              {name
                .split(" ")
                .filter((word) => word.length)
                .join(" ")
                .split(" ")
                .reduce((acc, letter) => acc + letter.toUpperCase()[0], "")
                .slice(0, 2)}
            </div>
            <h6>{name}</h6>
            <Button
              style={{ display: "inline-block" }}
              className="brandOpacity"
            >
              Anunciante
            </Button>
            <p>{description}</p>
            {isMyAd && (
              <Button
                style={{ margin: "24px 0 0 0" }}
                className="outlineBrand1"
                onClick={openCloseCreateAd}
              >
                Criar Anúncio
              </Button>
            )}
          </div>
        </div>
      </AdvertiserContainer>
    </>
  );
};
export default AdvertiserProfileCard;