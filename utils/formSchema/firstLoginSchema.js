import * as yup from 'yup'

export const firstLoginSchema = {
  currentPassword: yup
    .string()
    .required('Este campo es requerido')
    .min(8, 'Debe tener al menos 8 caracteres')
    .max(16, 'No debe exceder los 16 caracteres'),
  newPassword: yup
    .string()
    .required('Este campo es requerido')
    .min(8, 'Debe tener al menos 8 caracteres')
    .max(16, 'No debe exceder los 16 caracteres')
}

export const acceptedTermsAndConditionsSchema = {
  AcceptTermsAndConditions: yup
    .boolean()
    .required('Debes aceptar terminos y condiciones')
    .oneOf([true], 'Debes aceptar terminos y condiciones')
}

export const buildFirstloginSchema = (termsConditions = 'false') => {
  if (termsConditions === 'true') return yup.object().shape({ ...firstLoginSchema, ...acceptedTermsAndConditionsSchema })
  return yup.object().shape({ ...firstLoginSchema })
}
