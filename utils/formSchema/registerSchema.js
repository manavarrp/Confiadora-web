import * as yup from "yup";

export const registerSchema = yup.object().shape({
    firstName: yup
    .string()
    .required("Este campo es requerido"),
    firstLastName: yup
    .string()
    .required("Este campo es requerido"),
    phoneNumber: yup
    .string()
    .required("Este campo es requerido"),
    email: yup
    .string()
    .required("Este campo es requerido")
    .email("Por favor proporciona un correo valido"),
    birthDate: yup
    .string()
    .required("Este campo es requerido"),
   // .max(new Date(Date.now() - 567648000000), "Debes tener al menos 18 años"),
    identificationNumber: yup
    .string()
    .required("Este campo es requerido")
    .min("Debes ingresar al menos 10 caracteres"),
    genderId: yup
    .string()
    .required("Se requiere una opción"),
    stateId: yup
    .string()
    .required("Se requiere una opción"),
    terminsConditions: yup
    .string()
    .required("Debes aceptar los terminos "),
    privacity: yup
    .string()
    .required("Debes aceptar los terminos"),
});
