import Footer from "./components/footer";
import { Input } from "./components/input";
import UserAdvertiser from "./components/userAdvertiser";
import Router from "./routes";
import { GlobalStyle } from "./styles/globalstyles";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>
      <Input label={'label'} placeholder={'placeholder'} name={'label'} type={'password'}/>
      <Input label={'Textarea'} placeholder={'placeholder'} name={'label'} isTextarea={true}/>
      <UserAdvertiser userName={'Gabriel   '} color='#f0f'/>
      <Footer/>
    </>
  );
}

export default App;
