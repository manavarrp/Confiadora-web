import { getDateFormat } from './transformDate'

export const transformBackData = ({ personalData, ...restOfUser }) => {
  const {
    birthDate,
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    ...restOfpersonalData
  } = personalData

  // //console.log(personalData, "personal");
  const data = {
    personalData: {
      fullName: getFullName({
        firstName,
        secondName,
        firstLastName,
        secondLastName
      }),
      birthDate: getDateFormat(birthDate),
      ...restOfpersonalData
    },
    ...restOfUser
  }
  // //console.log(data, 'data')
  return data
}

export const transformDataProfileFullName = (payload) => {
  return {
    fullName: getFullName(payload),
    ...payload

  }
}

export const transformDataListCustomerFullName = (payload) => {
  return {
    fullName: getFullName(payload),
    ...payload

  }
}

export const transformAddress = ({ addressInformation, ...restOfUser }) => {
  const {
    residenceCountryName,
    domicileStateName,
    domicileMunicipalityName,
    domicileCityName,
    domicileNeighborhoodName,
    ...restOfaddressInformation
  } = addressInformation

  // //console.log(personalData, "personal");
  const data = {
    personalData: {
      fullName: `${residenceCountryName} ${domicileStateName}  ${domicileMunicipalityName}  ${domicileCityName} ${domicileNeighborhoodName} `,
      ...restOfaddressInformation
    },
    ...restOfUser
  }
  // //console.log(data, 'data')
  return data
}

const getFullName = ({
  firstName,
  secondName,
  firstLastName,
  secondLastName
}) => {
  return `${firstName} ${secondName} ${firstLastName} ${secondLastName}`
}
