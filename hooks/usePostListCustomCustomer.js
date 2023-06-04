import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { listCustomCustomerPost } from '../services/api'

const usePostListCustomCustomer = () => {
  const [loading, setLoading] = useState(false)
  const [listCustomer, setListCustomer] = useState([])

  const postListCustomCustomer = useCallback(async (payload) => {
    try {
      setLoading(true)
      const response = await listCustomCustomerPost(payload)
      // console.log({ response })
      setListCustomer(response)
      // console.log({ listCustomer })
      setLoading(false)
    } catch (error) {
      toast.error('Ha ocurrido un error en la busqueda')
    } finally {
      setLoading(false)
    }
  }, [])
  return { loading, postListCustomCustomer, listCustomer }
}

export default usePostListCustomCustomer
