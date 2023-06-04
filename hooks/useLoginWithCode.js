import { useCallback, useState } from 'react'
import globalAxios from '../axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { auth } from '../utils/auth'
import { decodeToken } from '../utils/decodeToken'
import Cookies from 'js-cookie'
import { AXIOS_COOKIE } from '../config'

const loginWithCode = (payload) => {
  return globalAxios().post('auth/twofactor-authentication', payload)
}

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const login = useCallback(
    async (payload) => {
      try {
        setIsLoading(true)

        const { data } = await loginWithCode(payload)

        const { token, isFirstLogin } = data?.data
<<<<<<< Updated upstream
        if (!token) return //console.log('error')
=======
        if (!token) return // console.log('error')
>>>>>>> Stashed changes

        if (isFirstLogin) return router.replace(`/auth/change-first-password?t=${token}`)

        const userInformation = decodeToken(token) || {}
        const response = await auth({ token, ...userInformation })
        if (response.status === 200) {
          Cookies.set(AXIOS_COOKIE, token)
<<<<<<< Updated upstream
          return router.replace('/customer/personal-form/personal-data')
        }
      } catch (error) {
        //console.log(error)
=======
          return router.replace('/customer')
        }
      } catch (error) {
        // console.log(error)
>>>>>>> Stashed changes
        toast.error('error con el codigo')
      } finally {
        setIsLoading(false)
      }
    },
    [router]
  )

  return { login, isLoading }
}

export default useLogin
