import { ButtonContainer } from "./style"

const Button = ({children, big=false, medium=false})=>{

    return(
        <ButtonContainer>
        {children}
        </ButtonContainer>
    )
}

export default Button