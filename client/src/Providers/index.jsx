import { ModalProvider } from "./modalProviders"

const Provider = ({children})=>{

    return(
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}

export default Provider

