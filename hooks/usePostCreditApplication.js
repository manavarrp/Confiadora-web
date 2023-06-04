import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { creditApplicationPost } from '../services/api'

const usePostCreditApplication = () => {
  const [loading, setLoading] = useState(false)

  const postCreditApplication = useCallback(async (payload) => {
    try {
      setLoading(true)
      await creditApplicationPost(payload)
      toast.success('Solicitud enviada con exito, vas a recibir un correo para continuar con el proceso')
      return Promise.resolve(true)
    } catch (error) {
      toast.error('Error al crear la solicitud de credito')
    } finally {
      setLoading(false)
    }
  }, [])
  return { loading, postCreditApplication }
}

export default usePostCreditApplication
