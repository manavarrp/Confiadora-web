import globalAxios from "../../axios";

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
