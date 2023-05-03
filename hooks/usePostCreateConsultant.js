import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { createConsultantPost } from '../services/api'

const usePostCreateConsultant = () => {
  const [loading, setLoading] = useState(false)

  const postCreateConsultant = useCallback(async (payload) => {
    try {
      setLoading(true)
      await createConsultantPost(payload)
      toast.success('Asesor creado con exito')
      return Promise.resolve(true)
    } catch (error) {
      toast.error('Error al crear el Asesor')
    } finally {
      setLoading(false)
    }
  }, [])
  return { loading, postCreateConsultant }
}

export default usePostCreateConsultant
