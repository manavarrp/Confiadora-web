import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'
import { useSelector } from 'react-redux'

const useGetCountry = () => {
  const state = useSelector((state) => state.physicalPersonForm)
  const [valuesCountry, setValuesCountry] = useState(() => state.countries)

  const GetData = useCallback(async () => {
    const result = await GetList('countries')
    setValuesCountry(result?.data?.data)
  }, [])

  useEffect(() => {
    if (!state.countries) { GetData() }
  }, [GetData, state.countries])
  return valuesCountry
}

export default useGetCountry
