import { useCallback, useState } from 'react'
import { GetNeighborhoodsById } from '../services/api'
import { useSelector } from 'react-redux'

const useGetNeighborhoodById = () => {
  const state = useSelector((state) => state.physicalPersonForm)
  const [optionsNeighborhood, setOptionsNeighborhood] = useState(() => state.neighborhoods)

  const GetDataNeighborhood = useCallback(async (id) => {
    const result = await GetNeighborhoodsById(id)
    setOptionsNeighborhood(result?.data.data)
  }, [])

  return { GetDataNeighborhood, optionsNeighborhood }
}

export default useGetNeighborhoodById
