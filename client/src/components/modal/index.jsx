import { ModalContainer } from "./style"
import {IoCloseOutline} from 'react-icons/io5'


const Modal = ({headerTitle, HeaderBody})=>{

    return(
        <ModalContainer>
            <div className="modal-box">
                <div className="modal-header">
                <span>{headerTitle}</span>
                <IoCloseOutline/>
                </div>
                <div className="modal-body">
                    {HeaderBody}
                </div>    
            </div>
        </ModalContainer>
    )
}

export default Modal
