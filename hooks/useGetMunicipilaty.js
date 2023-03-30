import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'

const useGetMunicipality = () => {
  const [valuesMunicipality, setValuesMunicipality] = useState([])

  const GetData = useCallback(async () => {
    const result = await GetList('colonys')
    setValuesMunicipality(result?.data)
  }, [])

  useEffect(() => {
    GetData()
  }, [GetData])
  return valuesMunicipality
}

export default useGetMunicipality
