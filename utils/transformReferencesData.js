export const transformReferencesData = ({ personalReferences, ...restOfUser }) => {
  const {
    fullName,
    occupation,
    timeOfKnowing,
    phoneNumber,
    ...restOfpersonalReferences
  } = personalReferences

  const data = {
    personalReferences: {
      fullName,
      occupation,
      timeOfKnowing,
      phoneNumber,
      ...restOfpersonalReferences
    },
    ...restOfUser
  }
  // //console.log(data, 'data')
  return data
}
