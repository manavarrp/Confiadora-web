import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'

const useGetCity = () => {
  const [valuesCity, setValuesCity] = useState([])

  const GetData = useCallback(async () => {
    const result = await GetList('colonys')
    setValuesCity(result?.data)
  }, [])

  useEffect(() => {
    GetData()
  }, [GetData])
  return valuesCity
}

export default useGetCity
