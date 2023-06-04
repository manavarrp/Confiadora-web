import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { sendChargedDataMassivePost } from '../services/api'

/* const errors = [{
  id: 1,
  name: 'Fila 1',
  message: 'Campo 1 vacio'
}, {
  id: 1,
  name: 'Fila 1',
  message: 'Campo 2 tipo de dato invalido'
}, {
  id: 1,
  name: 'Fila 1',
  message: 'Campo 3 vacio'
}, {
  id: 1,
  name: 'Fila 1',
  message: 'Campo 4 tipo de dato invalido'
}, {
  id: 1,
  name: 'Fila 2',
  message: 'Campo 1 vacio'

}, {
  id: 2,
  name: 'Fila 2',
  message: 'Campo 2 tipo de dato invalido'
}, {
  id: 4,
  name: 'Fila 4',
  message: 'Campo 3 vacio'
}, {
  id: 10,
  name: 'Fila 10',
  message: 'Campo 2 tipo de dato invalido'
}] */

const usePostChargeDataMassive = () => {
  const [loading, setLoading] = useState(false)
  const [errorForm, setErrorForm] = useState([])

  const postPostChargeData = useCallback(async (payload) => {
    try {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      const formData = new FormData()
      formData.append('formFile', payload)
      setLoading(true)

      // console.log({ payload })
      const result = await sendChargedDataMassivePost(formData)
=======
=======
>>>>>>> Stashed changes
      // const formData = new FormData()
      // formData.append('formFile', payload)
      setLoading(true)

      // console.log({ payload })
      const result = await sendChargedDataMassivePost(payload)
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      const res = result.data.errors
      //  if (result.data.errors) return setErrorForm(errors?.data?.errors)
      console.log({ res })

      toast.success('Información ingresada con exito, puedes validar los prospectos guardados')
    } catch (error) {
      setErrorForm(error?.response?.data?.errors)

      console.log({ errorForm })
      toast.error('Archivo con errores por corregir, por favor valida e ingresa nuevamente')
    } finally {
      setLoading(false)
    }
  }, [errorForm])

  const resetFileData = useCallback(() => {
    setErrorForm([])
  }, [])

  return { loading, postPostChargeData, errorForm, resetFileData }
}

export default usePostChargeDataMassive
