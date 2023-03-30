import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'

const useGetEconomicActivities = () => {
  const [valuesEconomicActivities, setValuesEconomicActivities] = useState([])

  const GetData = useCallback(async () => {
    const result = await GetList('colonys')
    setValuesEconomicActivities(result?.data)
  }, [])

  useEffect(() => {
    GetData()
  }, [GetData])
  return valuesEconomicActivities
}

export default useGetEconomicActivities
