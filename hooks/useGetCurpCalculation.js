import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { curpCalculation } from '../services/api'

const useGetCurpCalculation = () => {
  const getCurpCalculation = useCallback(async (userData) => {
    try {
      const response = await curpCalculation(userData)
      return response?.data?.data
    } catch (error) {
      toast.info(error.response.data.message)
    }
  }, [])

  return getCurpCalculation
}

export default useGetCurpCalculation
