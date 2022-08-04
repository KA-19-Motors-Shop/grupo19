import {createContext, useState, useContext} from "react";


const ModalContext = createContext({})


export const ModalProvider = ({children})=>{
    const [openModalEditAddress, setOpenModalEditAddress] = useState(false)
    const openCloseEditAddress = ()=>setOpenModalEditAddress(!openModalEditAddress) 

    const [openModalEditProfile, setOpenModalEditProfile] = useState(false)
    const openCloseEditProfile = ()=>setOpenModalEditProfile(!openModalEditProfile) 

    const [openModalCreateAd, setOpenModalCreateAd] = useState(false)
    const openCloseCreateAd = ()=>setOpenModalCreateAd(!openModalCreateAd) 

    const [openModalCreatedSuccess, setOpenModalCreatedSuccess] = useState(false)
    const openCloseCreatedSucsess = ()=>setOpenModalCreatedSuccess(!openModalCreatedSuccess)

    const [openModalAccountCreated, setOpenModalAccountCreated] = useState(false)
    const openCloseAccountCreated = ()=>setOpenModalAccountCreated(!openModalAccountCreated)

    const [openModalEditAd, setOpenModalEditAd] = useState(false)
    const openCloseEditAd = ()=>setOpenModalEditAd(!openModalEditAd)

    const [openModalExcludeAd, setOpenModalExcludeAd] = useState(false)
    const openCloseModalExcludeAd = ()=> setOpenModalExcludeAd(!openModalExcludeAd)

    const [ openModalImage, setOpenModalImage ] = useState(false)
    const openCloseModalImage = ()=>setOpenModalImage(!openModalImage)

    return(
        <ModalContext.Provider value={{
            openModalEditAddress,
            openCloseEditAddress,

            openModalEditProfile,
            openCloseEditProfile,

            openModalCreateAd,
            openCloseCreateAd,

            openModalCreatedSuccess,
            openCloseCreatedSucsess,

            openModalEditAd,
            openCloseEditAd,

            openModalExcludeAd,
            openCloseModalExcludeAd,

            openModalImage,
            openCloseModalImage,

            openModalAccountCreated,
            openCloseAccountCreated

        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = ()=>useContext(ModalContext)
