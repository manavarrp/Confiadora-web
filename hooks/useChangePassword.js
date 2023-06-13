import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { changePassword } from '../services/api'
import { useSession } from 'next-auth/react'

const useChangePassword = () => {
  const [loading, setLoading] = useState(true)
  const { data } = useSession()
  const setNewPassword = useCallback(async (values) => {
    const payload = {
      ...values,
      email: data?.user?.email
    }
    try {
      // await changePassword(payload)
      setLoading(false)
      await changePassword(payload)
      toast.success('Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.')

      // console.log({ response })
    } catch (e) {
    // console.log('error')
      toast.error('Error')
    } finally {
      setLoading(false)
    }
  }, [data?.user?.email])
  return { loading, setNewPassword }
}

export default useChangePassword
