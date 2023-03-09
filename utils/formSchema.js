import * as yup from "yup";

export const registerSchema = yup
  .object()
  .shape({
    UserName: yup
      .string()
      .email("Por favor proporciona un correo valido")
      .required("Correo es requerido"),
  })
  .required();
