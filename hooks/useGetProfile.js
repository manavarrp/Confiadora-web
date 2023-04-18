import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { profileGet } from '../services/api'
import { useSession } from 'next-auth/react'

const useChangePassword = () => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState()
  const { data } = useSession()
  const userId = data.user.sub
  const getProfileUser = useCallback(async () => {
    try {
      // await changePassword(payload)
      setLoading(false)
      const response = await profileGet(userId)
      setProfile(response)
      //  toast.success('Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.')
    } catch (e) {
    // console.log('error')
      toast.error('Error')
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    getProfileUser()
  }, [getProfileUser])

  return { loading, getProfileUser, profile }
}

export default useChangePassword
