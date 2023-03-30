export const transformBackData = ({ personalData, ...restOfUser }) => {
  const {
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    ...restOfpersonalData
  } = personalData;

  //console.log(personalData, "personal");
  const data = {
    personalData: {
      fullName: `${firstName} ${secondName} ${firstLastName} ${secondLastName}`,
      ...restOfpersonalData,
    },
    ...restOfUser,
  };
  console.log(data, "data");
  return data;
};
