import globalAxios from "../../axios";
import { transformBackData } from "../../utils/transformBackData";

const mockData = {
  message: "Consulta realizada exitosamente.",
  data: {
    personalInformation: {
      id: "08db219a-420d-459d-8fef-7e9fe5c8f774",
      firstName: "Erika",
      secondName: "Marcela",
      firstLastName: "Romero",
      secondLastName: "Gomez",
      email: "erika.romero@bikleek.com",
      phoneNumber: "3113271909",
      identificationTypeId: "08db2199-2426-44dd-812e-339824b5e3d8",
      identificationTypeName: "Residencia permanente",
      identificationNumber: "1039457711",
      genderId: "08db2199-2484-409c-8bd0-b3658269f8d3",
      genderName: "Femenino",
      birthDate: "1992-01-17T00:00:00",
      birthStateId: "08db2199-24b2-4879-877d-1ebe437c936d",
      birthStateName: "GUERRERO",
    },
    addressInfotmation: {
      id: "08db219a-420d-459d-8fef-7e9fe5c8f774",
      firstName: "Erika",
      secondName: "Marcela",
      firstLastName: "Romero",
      secondLastName: "Gomez",
      email: "erika.romero@bikleek.com",
      phoneNumber: "3113271909",
      identificationTypeId: "08db2199-2426-44dd-812e-339824b5e3d8",
      identificationTypeName: "Residencia permanente",
      identificationNumber: "1039457711",
      genderId: "08db2199-2484-409c-8bd0-b3658269f8d3",
      genderName: "Femenino",
      birthDate: "1992-01-17T00:00:00",
      birthStateId: "08db2199-24b2-4879-877d-1ebe437c936d",
      birthStateName: "GUERRERO",
    },
    workingInformation: {
      id: "08db219a-420d-459d-8fef-7e9fe5c8f774",
      firstName: "Erika",
      secondName: "Marcela",
      firstLastName: "Romero",
      secondLastName: "Gomez",
      email: "erika.romero@bikleek.com",
      phoneNumber: "3113271909",
      identificationTypeId: "08db2199-2426-44dd-812e-339824b5e3d8",
      identificationTypeName: "Residencia permanente",
      identificationNumber: "1039457711",
      genderId: "08db2199-2484-409c-8bd0-b3658269f8d3",
      genderName: "Femenino",
      birthDate: "1992-01-17T00:00:00",
      birthStateId: "08db2199-24b2-4879-877d-1ebe437c936d",
      birthStateName: "GUERRERO",
    },
    bankInformarion: {
      id: "08db219a-420d-459d-8fef-7e9fe5c8f774",
      firstName: "Erika",
      secondName: "Marcela",
      firstLastName: "Romero",
      secondLastName: "Gomez",
      email: "erika.romero@bikleek.com",
      phoneNumber: "3113271909",
      identificationTypeId: "08db2199-2426-44dd-812e-339824b5e3d8",
      identificationTypeName: "Residencia permanente",
      identificationNumber: "1039457711",
      genderId: "08db2199-2484-409c-8bd0-b3658269f8d3",
      genderName: "Femenino",
      birthDate: "1992-01-17T00:00:00",
      birthStateId: "08db2199-24b2-4879-877d-1ebe437c936d",
      birthStateName: "GUERRERO",
    },
    additionalInformation: {
      id: "08db219a-420d-459d-8fef-7e9fe5c8f774",
      firstName: "Erika",
      secondName: "Marcela",
      firstLastName: "Romero",
      secondLastName: "Gomez",
      email: "erika.romero@bikleek.com",
      phoneNumber: "3113271909",
      identificationTypeId: "08db2199-2426-44dd-812e-339824b5e3d8",
      identificationTypeName: "Residencia permanente",
      identificationNumber: "1039457711",
      genderId: "08db2199-2484-409c-8bd0-b3658269f8d3",
      genderName: "Femenino",
      birthDate: "1992-01-17T00:00:00",
      birthStateId: "08db2199-24b2-4879-877d-1ebe437c936d",
      birthStateName: "GUERRERO",
    },
    personalReference: {
      id: "08db219a-420d-459d-8fef-7e9fe5c8f774",
      firstName: "Erika",
      secondName: "Marcela",
      firstLastName: "Romero",
      secondLastName: "Gomez",
      email: "erika.romero@bikleek.com",
      phoneNumber: "3113271909",
      identificationTypeId: "08db2199-2426-44dd-812e-339824b5e3d8",
      identificationTypeName: "Residencia permanente",
      identificationNumber: "1039457711",
      genderId: "08db2199-2484-409c-8bd0-b3658269f8d3",
      genderName: "Femenino",
      birthDate: "1992-01-17T00:00:00",
      birthStateId: "08db2199-24b2-4879-877d-1ebe437c936d",
      birthStateName: "GUERRERO",
    },
  },
  errors: [],
  type: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200",
  title: "OK",
  status: 200,
  detail: "",
  instance: "/api/v1/users/08db219a-41cd-4797-8ba4-367037a103be/customer",
};

export const GetList = (params) => {
  return globalAxios.get(params);
};

export const curpCalculation = async (params) => {
  const response = await globalAxios.post(
    "identification-types/calculate-curp",
    params
  );

  return response;
};

export const physicalPersonPost = async (payload, path) => {
  const response = await globalAxios.post(path, payload);
  return response.data;
};

/* export const physicalPersonGet = async () => {
  const response = await globalAxios.get('physical-person')
  return { data: transformBackData(response.data) };
}
 */

export const physicalPersonGet = async () => {
  await sleep(2000);
  console.log(transformBackData(mockData.data));
  return { data: transformBackData({ ...mockData.data }) };
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
