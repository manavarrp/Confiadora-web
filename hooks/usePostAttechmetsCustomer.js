import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { physicalPersonPost, physicalPersonPut, physicalPersonAttachmentsPost } from '../services/api'
import { setPersonPhysicalForm } from '../features/physicalPersonForm/ppFormSlice'

// TODO: extraer esta funcion a una utilidad o helper (FN para crear la key del objeto que se encuentra en el estado)
const buildKey = (path) => {
  const [first, second] = path?.split('/')?.at(-1)?.split('-')
  const capitalize = second.charAt(0).toUpperCase() + second.slice(1)
  return `${first}${capitalize}`
}

const usePostAttechmetsCustomer = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector(state => state.physicalPersonForm)
  const postAttechmetsCustomer = useCallback(async (payload, files, path) => {
    try {
      setLoading(true)
      const fn = payload?.id ? physicalPersonPut : physicalPersonPost
      const { data } = await fn(payload, path)
      const key = buildKey(path)
      // console.log({ data, key })
      dispatch(setPersonPhysicalForm({ data, key }))
      if (!files) return toast.success('Información ingresada con exito')
      await physicalPersonAttachmentsPost(files, path)

      toast.success('Los archivos e informacion ha sido cargada con exito')
    } catch (error) {
      console.log({ error })
      return toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }, [dispatch])

  return { loading, postAttechmetsCustomer, ...state }
}

export default usePostAttechmetsCustomer
