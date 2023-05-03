import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { listCustomerGet } from '../services/api'
import { useSession } from 'next-auth/react'

const useGetListCustomer = () => {
  const [loading, setLoading] = useState(true)
  const [listCustomer, setListCustomer] = useState([])
  const { data } = useSession()

  const getListCustomer = useCallback(async () => {
    try {
      // await changePassword(payload)
      setLoading(false)
      const response = await listCustomerGet()
      console.log({ response })
      setListCustomer(response)
      console.log({ listCustomer })
      //  toast.success('Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.')
    } catch (e) {
    // console.log('error')
      toast.error('Error')
    } finally {
      setLoading(false)
    }
  }, [listCustomer])

  useEffect(() => {
    getListCustomer()
  }, [getListCustomer])

  return { loading, getListCustomer, listCustomer }
}

export default useGetListCustomer
