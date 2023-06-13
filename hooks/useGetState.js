import { useCallback, useEffect, useState } from 'react'
import { GetList } from '../services/api'
import { useSelector } from 'react-redux'

const useGetState = () => {
  const state = useSelector((state) => state.physicalPersonForm)
  const [valuesState, setValuesState] = useState(() => state.states)

  const GetData = useCallback(async () => {
    const result = await GetList('states')
    setValuesState(result?.data?.data)
  }, [])
  useEffect(() => {
    if (!state.states) { GetData() }
  }, [GetData, state.states])
  return valuesState
}

export default useGetState
