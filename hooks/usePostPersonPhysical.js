import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { physicalPersonPost } from '../services/api'
import { personPhysicalForm } from '../features/physicalPersonForm/ppFormSlice'

const usePostPersonPhysical = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector(state => state.physicalPersonForm)
  const postPersonPhysicalData = useCallback(async (payload, path) => {
    try {
      setLoading(true)
      await physicalPersonPost(payload, path)
      dispatch(personPhysicalForm(payload))
    } catch (error) {
      return toast.error(error.message.data)
    } finally {
      setLoading(false)
    }
  }, [dispatch])

  return { loading, postPersonPhysicalData, ...state }
}

export default usePostPersonPhysical
