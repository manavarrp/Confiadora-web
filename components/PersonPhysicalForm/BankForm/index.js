import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import usePostPersonPhysical from '../../../hooks/usePostPersonPhysical'
import styles from '../../../styles/Username.module.css'
import Input from '../../common/Input'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import { useState, useCallback } from 'react'

const DEFAULT_VALUES = {
  accountNumberClabe: '',
  id: ''
}

function RegisterForms ({ initialValues }) {
  const router = useRouter()

  const { customerId } = useSelector((state) => state.physicalPersonForm)
  const { loading, postPersonPhysicalData } = usePostPersonPhysical()
  // const { putPersonPhysicalData } = usePutPersonPhysical()

  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: initialValues || DEFAULT_VALUES
  })

  const { data } = useSession()

  /*   const onSubmitBankForm = (data) => {
    const payload = {
      accountNumberClabe: data.accountNumberClabe,
      customerId
    }
    postPersonPhysicalData(payload, 'natural-person/banking-information')
    // console.log(payload)
    setId(data.id)
  } */

  const onSubmitBankFormUpdate = (data) => {
    const payload = {
      accountNumberClabe: data.accountNumberClabe,
      customerId,
      id: data?.id

    }

    postPersonPhysicalData(payload, 'natural-person/banking-information')

    // console.log(payload)
  }

  const onSubmitPersonFormNext = () => {
    router.push('/customer/personal-form/add-data')
  }

  const onSubmitPersonFormBack = () => {
    router.push('/customer/personal-form/work-data')
  }

  return (
    <div className=''>
      <form className='mx-auto max-w-screen-md'>
        <div className='w-full mb-3'>
          <div className='flex flex-col '>
            <label className='text-sm text-darkBlue'>Cuenta Clabe*</label>
            <Input
              type='text'
              placeholder='Escribir datos bancarios (cuenta clabe).'
              className={styles.textbox}
              name='accountNumberClabe'
              register={register}
            />
            <Input
              type='text'
              // placeholder='Número exterior'
              className='hidden'
              name='id'
              register={register}
            />
          </div>
        </div>
        <div className='w-full mb-3 bg-white'>
          <label className='text-darkBlue'>
            Adjuntar certificados bancarios (referencia del banco /estado de cuenta con cuenta clabe).
          </label>

          <p
            className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300'
            id='file_input_help'
          >
            PNG, JPG ó PDF (MAX. 800x400px).
          </p>
        </div>
        <p
          className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300'
          id='file_input_help'
        >
          * Campos obligatorios
        </p>
        <div className='flex justify-between mt-5'>
          <button
            type='submit'
            onClick={handleSubmit(onSubmitPersonFormBack)}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Atras
          </button>
          {/*          {id && id
            ? <button
                type='submit'
                onClick={handleSubmit(onSubmitBankFormUpdate)}
                 // disabled={loading}
                className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
                text='Guardar'
              />

            : <button
                type='submit'
                onClick={handleSubmit(onSubmitBankForm)}
                 // disabled={loading}
                className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
                text='Guardar'
              />}
 */}
          {/*    <button
            type='submit'
            onClick={handleSubmit(onSubmitBankForm)}
            disabled={loading}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            {loading ? 'cargando' : 'Guardar'}
          </button> */}
          <button
            type='submit'
            onClick={handleSubmit(onSubmitBankFormUpdate)}
            disabled={loading}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            {loading ? 'cargando' : 'Guardar'}
          </button>
          <button
            type='submit'
            onClick={handleSubmit(onSubmitPersonFormNext)}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForms
