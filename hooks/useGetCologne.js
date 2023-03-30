import { useCallback, useEffect, useState } from "react";
import { GetList } from "../services/api";

const useGetCologne = () => {
  const [valuesCologne, setValuesCologne] = useState([]);

  const GetData = useCallback(async () => {
    const result = await GetList("colonys");
    setValuesCologne(result?.data);
  }, []);

  useEffect(() => {
    GetData();
  }, [GetData]);
  return valuesCologne;
};

export default useGetCologne;
