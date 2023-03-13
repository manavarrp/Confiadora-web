import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Este campo es requerido"),
  firstLastName: yup.string().required("Este campo es requerido"),
  phoneNumber: yup.string().required("Este campo es requerido"),
  email: yup
    .string()
    .required("Este campo es requerido")
    .email("Por favor proporciona un correo valido"),
  birthDate: yup.string().required("Este campo es requerido"),
  // .max(new Date(Date.now() - 567648000000), "Debes tener al menos 18 años"),
  identificationNumber: yup.string().when("canRegister", {
    is: (canRegister) => canRegister,
    then: (schema) =>
      schema.required("Debes propocionar tu numero de identificación"),
  }),
  genderId: yup.string().required("Se requiere una opción"),
  stateId: yup.string().required("Se requiere una opción"),
  AcceptTermsAndConditions: yup.boolean().when("identificationNumber", {
    is: (identificationNumber) => identificationNumber,
    then: (schema) =>
      schema.required("Debes propocionar tu numero de identificación"),
  }),
  hasAgreementCode: yup.boolean().when("canRegister", {
    is: (canRegister) => canRegister, // alternatively: (val) => val == true
    then: (schema) =>
      schema.required("Debes propocionar tu numero de identificación"),
  }),
});
