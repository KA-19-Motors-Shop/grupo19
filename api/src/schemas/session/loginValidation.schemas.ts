import * as yup from "yup";

const loginValidation = {
  schema: {
    body: {
      yupSchema: yup.object().shape({
        email: yup
          .string()
          .required("It is mandatory to provide a email")
          .email("Please, provide a e-mail in the right format"),
        password: yup
          .string()
          .required("It is mandatory to provide a password")
          .max(255),
      }),
      validateOptions: {
        abortEarly: false,
      },
    },
  },
};

export default loginValidation;
