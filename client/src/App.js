import Footer from "./components/footer";
import Header from "./components/header";
import ModalAccountCreated from "./components/modalAccountCreated";
import ModalAdCreatedSuccess from "./components/modalAdCreatedSuccess";
import ModalEditAd from "./components/modalEditAd";
import ModalExcludeAd from "./components/modalExcludeAd";
import { useModal } from "./Providers/modalProviders";
import Router from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  const {
    openModalEditAd,
    openModalExcludeAd,
    openModalCreatedSuccess,
    openModalAccountCreated,
  } = useModal();
  return (
    <>
      {openModalEditAd && <ModalEditAd />}
      {openModalExcludeAd && <ModalExcludeAd />}
      {openModalCreatedSuccess && <ModalAdCreatedSuccess />}
      {openModalAccountCreated && <ModalAccountCreated/>}
      <Header />
      <GlobalStyle />
      <Router />
      <Footer />
    </>
  );
}

export default App;
