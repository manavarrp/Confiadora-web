import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { customerDataPut } from '../services/api'

const usePutDataCustomer = () => {
  const [loading, setLoading] = useState(false)

  const putDataCustomer = useCallback(async (payload) => {
    try {
      setLoading(true)

      await customerDataPut(payload)

      toast.success('Información ingresada con exito')
      return Promise.resolve(true)
    } catch (error) {
      toast.error('Error al actualizar')
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, putDataCustomer }
}

export default usePutDataCustomer
