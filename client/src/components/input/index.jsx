import { InputContainer } from "./style";
import InputMask from "react-input-mask";
import { FiAlertCircle } from "react-icons/fi";
import { cepMask, cpfMask, telMask } from "../../masks";
import { getAddressInfo } from "../../utils";


export const Input = ({
  label,
  placeholder,
  name,
  error,
  isTextarea = false,
  register,
  ...rest
}) => {
  return (
    <InputContainer>
      <label htmlFor="">{label}</label>
      {register ? (
        isTextarea ? (
          <textarea
            {...register(name)}
            placeholder={placeholder}
            name={name}
            {...rest}
          />
        ) : name === "tel" || name === "cel" ? (

          <input
            {...register(name)}
            placeholder={placeholder}
            name={name}
            {...rest}
            id='tel'
            onInput = {(e)=>{
              document.getElementById('tel').value = telMask(document.getElementById('tel').value)
            }}
          />

        ) : name === "cpf" ? (

          <input
            {...register(name)}
            placeholder={placeholder}
            name={name}
            {...rest}
            id='cpf'
            onInput = {(e)=>{
              document.getElementById('cpf').value = cpfMask(document.getElementById('cpf').value)
            }}
          />
        ) : name === "cep" ? (

          <input
            {...register(name)}
            placeholder={placeholder}
            name={name}
            {...rest}
            id='cep'
            onInput = {(e)=>{
              document.getElementById('cep').value = cepMask(document.getElementById('cep').value)
              getAddressInfo(e)
            }}
          />
        ) : name === "state" ? (
          <input
            {...register(name)}
            placeholder={placeholder}
            name={name}
            maxLength='2'
            className="uppercase"
            {...rest}
          />
        ) : (
          <input
            {...register(name)}
            placeholder={placeholder}
            name={name}
            {...rest}
          />
        )
      ) : isTextarea ? (
        <textarea placeholder={placeholder} name={name} {...rest} />
      ) : (
        <input placeholder={placeholder} name={name} {...rest} />
      )}
      {error?.message && (
        <span className="error-msg">
          <FiAlertCircle /> {error.message}
        </span>
      )}
    </InputContainer>
  );
};
