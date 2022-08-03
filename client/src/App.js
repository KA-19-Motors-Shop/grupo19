import Footer from "./components/footer";
import Header from "./components/header";
import Router from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
