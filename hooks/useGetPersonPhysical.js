import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { physicalPersonGet } from '../services/api'
import { setAllPersonPhysicalForm } from '../features/physicalPersonForm/ppFormSlice'

const useGetPersonPhysical = () => {
  const state = useSelector((state) => state.physicalPersonForm)

  const [loading, setLoading] = useState(() => !state.personalData)
  console.log(loading)
  // console.log(state, "state");
  // console.log(physical, "physical");
  const dispatch = useDispatch()

  const getPersonPhysicalData = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await physicalPersonGet()
      // console.log(data, "data");
      dispatch(setAllPersonPhysicalForm(data))
    } catch (error) {
      return toast.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    if (!state.personalData) {
      getPersonPhysicalData()
    }
  }, [state.personalData, getPersonPhysicalData])

  return { loading, getPersonPhysicalData, ...state }
}

export default useGetPersonPhysical
