export const transformBackData = ({ personalInformation, ...restOfUser }) => {
  const {
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    ...restOfPersonalInformation
  } = personalInformation;

  //console.log(personalInformation, "personal");
  const data = {
    personalInformation: {
      fullName: `${firstName} ${secondName} ${firstLastName} ${secondLastName}`,
      ...restOfPersonalInformation,
    },
    ...restOfUser,
  };
  console.log(data, "data");
  return data;
};
