import { getBase64 } from './fileToBase64'

export const getAddressPayload = async (data) => {
  const payload = {
    residenceCountryId: data.residenceCountryId,
    domicileCountryId: data.domicileCountryId,
    domicileStateId: data.domicileStateId,
    domicileMunicipalityId: data.domicileMunicipalityId,
    domicileCityId: data.domicileCityId,
    domicileNeighborhoodId: data.domicileNeighborhoodId,
    outerNumber: data.outerNumber,
    innerNumber: data.innerNumber,
    firstBetweenStreet: data.firstBetweenStreet,
    secondBetweenStreet: data.secondBetweenStreet,
    zipCode: data.zipCode,
    customerId: data.customerId,
    id: data?.id
  }
  const file = data.ine[0]
  if (!file) return { payload }

  const files = {
    customerId: data.customerId,
    addAddressInformationId: data?.id,
    formFiles: [

    ]
  }
  const { error, fileToBase64 } = await getBase64(data.ine[0])
  if (error) return { error }

  files.formFiles.push(fileToBase64)
  return { files, payload }
}

export const getPersonFormPayload = async (data) => {
  const payload = {
    birthCountryId: data.birthCountryId,
    secondaryPhoneNumber: data.secondaryPhoneNumber,
    fiel: data.fiel,
    maritalStatusId: data.maritalStatusId,
    customerId: data.customerId
  }
  const file = data.ine[0]
  if (!file) return { payload }

  const files = {
    customerId: data.customerId,
    formFiles: [

    ]
  }
  const { error, fileToBase64 } = await getBase64(data.ine[0])
  if (error) return { error }

  files.formFiles.push(fileToBase64)
  return { files, payload }
}

export const getBankFormPayload = async (data) => {
  const payload = {
    accountNumberClabe: data.accountNumberClabe,
    customerId: data.customerId,
    id: data?.id
  }
  const file = data.ine[0]
  if (!file) return { payload }

  const files = {
    customerId: data.customerId,
    bankingInformationId: data?.id,
    formFiles: [

    ]
  }
  const { error, fileToBase64 } = await getBase64(data.ine[0])
  if (error) return { error }

  files.formFiles.push(fileToBase64)
  return { files, payload }
}

export const getWorkFormPayload = async (data) => {
  const payload = {
    namePlaceOfWork: data.namePlaceOfWork,
    economicActivityId: data.economicActivityId,
    jobPosition: data.jobPosition,
    lengthOfService: data.lengthOfService,
    averageMonthlyIncome: data.averageMonthlyIncome,
    customerId: data.customerId,
    id: data?.id
  }

  const file = data.ine[0]
  if (!file) return { payload }

  const files = {
    customerId: data.customerId,
    employmentInformationId: data?.id,
    formFiles: [

    ]
  }
  const { error, fileToBase64 } = await getBase64(data.ine[0])
  if (error) return { error }

  files.formFiles.push(fileToBase64)
  return { files, payload }
}
