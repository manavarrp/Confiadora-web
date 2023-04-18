import { useCallback, useState } from 'react'
import { GetCitiesById } from '../services/api'
import { useSelector } from 'react-redux'

const useGetCitiesById = () => {
  const state = useSelector((state) => state.physicalPersonForm)
  const [optionsCities, setOptionsCities] = useState(() => state.cities)

  const GetDataCities = useCallback(async (id) => {
    const result = await GetCitiesById(id)
    setOptionsCities(result?.data.data)
  }, [])

  return { GetDataCities, optionsCities }
}

export default useGetCitiesById
