<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { useCallback, useState } from "react";
import { GetNationalityById } from "../services/api";

const useGetNacionalityByID = () => {
  const [optionsNacionality, setOptions] = useState([]);

  const GetDataNaiconality = useCallback(async () => {
    const result = await GetNationalityById();

    setOptions(result?.data?.data?.nationality);

    //console.log(result, 'result')
  }, []);

  return { GetDataNaiconality, optionsNacionality };
};

export default useGetNacionalityByID;
=======
=======
>>>>>>> Stashed changes
import { useCallback, useState } from 'react'
import { GetNationalityById } from '../services/api'

const useGetNacionalityByID = () => {
  const [optionsNacionality, setOptions] = useState([])

  const GetDataNaiconality = useCallback(async () => {
    const result = await GetNationalityById()

    setOptions(result?.data?.data?.nationality)

    // console.log(result, 'result')
  }, [])

  return { GetDataNaiconality, optionsNacionality }
}

export default useGetNacionalityByID
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
