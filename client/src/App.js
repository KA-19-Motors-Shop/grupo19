import Footer from "./components/footer";
import { Input } from "./components/input";
import Modal from "./components/modal";
import UserAdvertiser from "./components/userAdvertiser";
import Router from "./routes";
import { GlobalStyle } from "./styles/globalstyles";
import Button from "./components/button";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router/>


      <Modal headerTitle={"Modal teste"} HeaderBody={
      <form>
        <div style={{display:'flex', gap:'10px'}}>
        <Input label={'Nome'} placeholder={'Nome'} name={'Nome'} />
        <Input label={'Sobrenome'} placeholder={'Sobrenome'} name={'Sobrenome'} />

        </div>
        <Input label={'Email'} placeholder={'Email'} name={'Email'} />
        <Input label={'Password'} placeholder={'Password'} name={'Password'} type={'password'} />
        <div style={{textAlign:'end', margin:'20px 0 0 '}}>

        <Button className="brandOpacity" style={{margin:'0 10px 0 0'}}>Voltar</Button>
        <Button className="brand1">Cadastrar</Button>
        </div>
      </form>
      } />
      <Input label={'label'} placeholder={'placeholder'} name={'label'} type={'password'}/>
      <Input label={'Textarea'} placeholder={'placeholder'} name={'label'} isTextarea={true}/>
      <UserAdvertiser userName={'Gabriel   '} color='#f0f'/>
      <Footer/>
    </>
  );
}

export default App;
