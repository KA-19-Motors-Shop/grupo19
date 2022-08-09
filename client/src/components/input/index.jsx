import { InputContainer } from "./style"
import InputMask from 'react-input-mask';


export const Input = ({label, placeholder, name, isTextarea=false, register, ...rest })=>{
    return(
        <InputContainer>
            <label htmlFor="">{label}</label>
            {register ? (
                isTextarea ? (
                    <textarea {...register(name)} placeholder={placeholder} name={name} {...rest} />
                ):(

                    (name === 'tel' || name === 'cel' )? (
                        <InputMask {...register(name)} mask="(99)99999-9999" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ): name === 'cpf' ? (
                        <InputMask {...register(name)} mask="999.999.999-99" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ): name === 'cep' ? (
                        <InputMask {...register(name)} mask="99999.999" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ): name === 'birthdate' ? (
                        <InputMask {...register(name)} mask="99/99/9999" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ):(
                        <input {...register(name)} placeholder={placeholder} name={name} {...rest} />
                    )
                )
            ):
            (
                isTextarea ? (
                    <textarea placeholder={placeholder} name={name} {...rest} />
                ):(
                    (name === 'tel' || name === 'cel' )? (
                        <InputMask  mask="(99)99999-9999" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ): name === 'cpf' ? (
                        <InputMask  mask="999.999.999-99" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ): name === 'cep' ? (
                        <InputMask  mask="99999.999" maskChar="" placeholder={placeholder} name={name} {...rest}/>
                    ):(
                        <input placeholder={placeholder} name={name} {...rest} />
                    )
                )
            )
            }
        </InputContainer>
    )
}