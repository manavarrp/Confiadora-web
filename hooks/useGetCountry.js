import { useCallback, useEffect, useState } from "react";
import { GetList } from "../services/api";

const useGetCountry = () => {
  const [valuesCountry, setValuesCountry] = useState([]);

  const GetData = useCallback(async () => {
    const result = await GetList("colonys");
    setValuesCountry(result?.data);
  }, []);

  useEffect(() => {
    GetData();
  }, [GetData]);
  return valuesCountry;
};

export default useGetCountry;
