import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  physicalPersonGet,
  GetList,
  GetMunicipalityById,
  GetCitiesById,
  GetNeighborhoodsById,
} from "../services/api";
import { setAllPersonPhysicalForm } from "../features/physicalPersonForm/ppFormSlice";
import { useSession } from "next-auth/react";

const DEFAULT_RESPONSE = {
  data: {
    data: [],
  },
};

const useGetPersonPhysical = () => {
  const state = useSelector((state) => state.physicalPersonForm);
  const { data } = useSession();
  const userId = data.user.sub;
  const [loading, setLoading] = useState(() => !state.personalData);
  // //console.log(loading)
  // //console.log(state, "state");
  // //console.log(physical, "physical");
  const dispatch = useDispatch();

  const getPersonPhysicalData = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: { data: states },
      } = await GetList("states");
      const {
        data: { data: countries },
      } = await GetList("countries");
      const {
        data: { data: economicActivities },
      } = await GetList("economic-activities");

      const { data } = await physicalPersonGet(userId);
      const { domicileStateId, domicileMunicipalityId, domicileCityId } =
        data?.addressInformation || {};
      const {
        data: { data: municipalities },
      } = domicileStateId
        ? await GetMunicipalityById(domicileStateId)
        : DEFAULT_RESPONSE;
      const {
        data: { data: cities },
      } = domicileMunicipalityId
        ? await GetCitiesById(domicileMunicipalityId)
        : DEFAULT_RESPONSE;
      const {
        data: { data: neighborhoods },
      } = domicileCityId
        ? await GetNeighborhoodsById(domicileCityId)
        : DEFAULT_RESPONSE;
      //console.log(data, 'data')
      // console.log(countries, 'countries')
      dispatch(
        setAllPersonPhysicalForm({
          ...data,
          municipalities,
          cities,
          neighborhoods,
          states,
          countries,
          economicActivities,
        })
      );
    } catch (error) {
      // console.log(error, 'error')
      return toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (!state.personalData) {
      getPersonPhysicalData();
    }
  }, [state.personalData, getPersonPhysicalData]);

  return { loading, getPersonPhysicalData, ...state };
};

export default useGetPersonPhysical;
