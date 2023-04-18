import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { physicalPersonPost, physicalPersonPut } from "../services/api";
import { setPersonPhysicalForm } from "../features/physicalPersonForm/ppFormSlice";

const buildKey = (path) => {
  const [first, second] = path?.split("/")?.at(-1)?.split("-");
  const capitalize = second.charAt(0).toUpperCase() + second.slice(1);
  return `${first}${capitalize}`;
};

const usePostPersonPhysical = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.physicalPersonForm);
  const postPersonPhysicalData = useCallback(async (payload, path) => {
    try {
      setLoading(true);
      const fn = payload?.id ? physicalPersonPut : physicalPersonPost;
      const { data } = await fn(payload, path);
      const key = buildKey(path);
      console.log({ data, key });
      dispatch(setPersonPhysicalForm({ data, key }));
      toast.success("Información ingresada con exito");
    } catch (error) {
      return toast.error("Error al ingresar la información");
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, postPersonPhysicalData, ...state };
};

export default usePostPersonPhysical;
