import globalAxios from "../../axios";

export const GetList = (params) => {
  return globalAxios.get(params);
};
