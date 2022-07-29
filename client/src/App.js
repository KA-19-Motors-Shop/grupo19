import Footer from "./components/footer";
import Router from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
