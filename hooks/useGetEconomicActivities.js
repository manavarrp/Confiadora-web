import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'
import { useSelector } from 'react-redux'

const useGetEconomicActivities = () => {
  const state = useSelector((state) => state.physicalPersonForm)
  const [valuesEconomicActivities, setValuesEconomicActivities] = useState(() => state.economicActivities)

  const GetData = useCallback(async () => {
    const result = await GetList('economic-activities')
    setValuesEconomicActivities(result?.data?.data)
  }, [])

  useEffect(() => {
    if (!state.economicActivities) { GetData() }
  }, [GetData, state.economicActivities])
  return valuesEconomicActivities
}

export default useGetEconomicActivities
