import { ButtonContainer } from "./style"

const Button = ({children, className='default', isBig=false, fullWidth})=>{


    return(
        <ButtonContainer  isBig={isBig} fullWidth={fullWidth} >
            <button className={className}>
            {children}
            </button>
        </ButtonContainer>
    )
}

export default Button