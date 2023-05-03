import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { physicalPersonPut } from '../services/api'
import { personPhysicalForm } from '../features/physicalPersonForm/ppFormSlice'

const usePostPersonPhysical = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector(state => state.physicalPersonForm)
  const putPersonPhysicalData = useCallback(async (payload, path) => {
    try {
      setLoading(true)
      await physicalPersonPut(payload, path)
      dispatch(personPhysicalForm(payload))
      toast.success('Información ingresada con exito')
    } catch (error) {
      console.log(error)
      return toast.error('Error')
    } finally {
      setLoading(false)
    }
  }, [dispatch])

  return { loading, putPersonPhysicalData, ...state }
}

export default usePostPersonPhysical
