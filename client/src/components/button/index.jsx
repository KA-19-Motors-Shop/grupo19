import { ButtonContainer } from "./style"

const Button = ({children, className='default', isBig=false, fullWidth, type,...rest})=>{


    return(
        <ButtonContainer  isBig={isBig} fullWidth={fullWidth} {...rest} >
            <button type={type} className={className}>
            {children}
            </button>
        </ButtonContainer>
    )
}

export default Button