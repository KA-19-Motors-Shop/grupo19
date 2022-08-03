import { ProfileContainer } from "./style";
import ContainerCards from "../../components/ContainerCards";
import ContainerAuction from "../../components/containerAuction";
import AdvertiserProfileCard from "../../components/AdvertisementProfileCard";
import { arrayAuction, arrayCars } from "../../arraysTest";


const ProfilePageProduct = () => {
  
  return (
    <ProfileContainer>
      <AdvertiserProfileCard
        name={"Gabriel"}
        description={
          "lorem blabla bla bla lorem blabla bla bla lorem blabla bla bla lorem blabla bla bla "
        }
      />
      <ContainerAuction arrayTorender={arrayAuction} />
      <ContainerCards arrayToRender={arrayCars} typeCard="Carros" />
      <ContainerCards arrayToRender={arrayCars} typeCard="Motos" />
    </ProfileContainer>
  );
};

export default ProfilePageProduct;
