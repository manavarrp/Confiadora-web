import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../../styles/Username.module.css'
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import States from '../../../auth/Catalogs/States'
import ResidenceCountry from '../../../Catalogs/ResidenceCountry'

import { useRouter } from 'next/router'
import Input from '../../../common/Input'

import { toast } from 'react-toastify'

const ConfirmForm = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const { isLoading, isSuccess } = useSelector((state) => state.auth)

  const methods = useForm({
    defaultValues: {

      stateId: ''

    }
    // resolver: yupResolver(registerSchema)
  })

  const {
    register,
    handleSubmit,

    setValue,

    formState: { errors }
  } = methods

  // const result = message;
  // //console.log(localDirtyData);

  // //console.log(message.data);
  const submitFormRegister = async (data) => {
    // //console.log(data);

    dispatch(registerUser(data))

    // console.info(JSON.stringify(data));
  }
  const handleChange = (event) => {
    // Actualiza el estado con la nueva fecha y hora
    setCurrentDate(event.target.value)
  }
  return (
    <>
      <div className='md:w-[1000px] shadow-xl shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
        <div className='title flex flex-col items-center'>
          <h1 className='text-xl font-bold mb-5'>CONFIRMAR</h1>
          <span className=' text-center text-gray ml-6 mb-5'>
            Recuerde tener a la mano el codigo transaccional
          </span>
        </div>
        <FormProvider {...methods}>

          <div className='flex flex-col w-full mb-10 gap-3 sm:flex-row'>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>País de residencia</label>
              <ResidenceCountry />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>
                Estado
              </label>
              <States />
            </div>
          </div>

          <div className='w-full gap-1'>

            <div className='mb-3'>
              {' '}

            </div>
          </div>

          <div className='flex flex-col justify-center items-center mt-2 w-full'>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>Fecha de Elaboración</label>
              <Input
                className={styles.textbox}
                type='datetime-local'
                value={currentDate.toISOString().slice(0, 16)}
                onChange={handleChange}
                readOnly
              />

            </div>

          </div>

          <div className=' flex justify-center mt-3'>
            <button
              type='submit'
              onClick={handleSubmit()}
             // disabled={isLoading}
              className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
            >
              {isLoading ? 'cargando' : 'Continuar'}
            </button>
          </div>

        </FormProvider>
      </div>

    </>
  )
}

export default ConfirmForm
