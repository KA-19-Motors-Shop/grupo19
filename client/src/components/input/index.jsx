import { InputContainer } from "./style"

export const Input = ({label, placeholder, name, isTextarea=false, register, ...rest })=>{
    return(
        <InputContainer>
            <label htmlFor="">{label}</label>
            {register ? (
                isTextarea ? (
                    <textarea {...register(name)} placeholder={placeholder} name={name} {...rest} />
                ):(
                    <input {...register(name)} placeholder={placeholder} name={name} {...rest} />
                )
            ):
            (
                isTextarea ? (
                    <textarea placeholder={placeholder} name={name} {...rest} />
                ):(
                    <input placeholder={placeholder} name={name} {...rest} />
                )
            )
            }
        </InputContainer>
    )
}