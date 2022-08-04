import { ModalProvider } from "./modalProviders"

export const Provider = ({children})=>{

    return(
        <ModalProvider>
            {children}
        </ModalProvider>
    )
}




