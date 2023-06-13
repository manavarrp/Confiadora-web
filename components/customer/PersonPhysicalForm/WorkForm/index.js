import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import usePostAttechmetsCustomer from '../../../../hooks/usePostAttechmetsCustomer'
import styles from '../../../../styles/Username.module.css'
import Input from '../../../common/Input'
import { Radiobutton } from '../../../common/Radiobutton'
import EconomicActivities from '../../../Catalogs/EconomicActivities'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getWorkFormPayload } from '../../../../utils/physicalPersonToTransformData'
import { toast } from 'react-toastify'

const DEFAULT_VALUES = {
  namePlaceOfWork: '',
  economicActivityId: '',
  jobPosition: '',
  lengthOfService: '',
  averageMonthlyIncome: '',
  id: ''
}

function RegisterForms ({ initialValues }) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState()
  const { customerId } = useSelector((state) => state.physicalPersonForm)

  const { loading, postAttechmetsCustomer } = usePostAttechmetsCustomer()
  // const { putPersonPhysicalData } = usePutPersonPhysical()

  const methods = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: initialValues || DEFAULT_VALUES
  })

  const {
    register,
    handleSubmit

    // formState: { errors }
  } = methods

  // Esta función se activará cuando cambie el campo del archivo.
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files)
    }
  }

  // Esta función se activará cuando se haga clic en el botón "Eliminar esta imagen".
  const removeSelectedImage = () => {
    setSelectedImage()
  }

  const onSubmitWorkFormUpdate = async (data) => {
    const { error, files, payload } = await getWorkFormPayload({ customerId, ...data })
    if (error) return toast.warning('Se ha producido un error al cargar tu archivo intenta nuevamente por favor')

    postAttechmetsCustomer(payload, files, 'natural-person/employment-information')

    // console.log(payload)
  }

  const onSubmitPersonFormNext = () => {
    router.push('/customer/personal-form/banks-data')
  }

  const onSubmitPersonFormBack = () => {
    router.push('/customer/personal-form/address-data')
  }

  return (
    <div className=''>
      <FormProvider {...{ register, handleSubmit }}>
        <form className='mx-auto max-w-screen-md'>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>
                Nombre de la Institución en la que labora*
              </label>
              <Input
                type='text'
                placeholder='Nombre de la Institución en la que labora.'
                className={styles.textbox}
                name='namePlaceOfWork'
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

          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
              <div className='flex flex-col w-full'>
                <label className='text-sm text-darkBlue'>
                  Puesto/Profesión*
                </label>
                <Input
                  type='text'
                  placeholder='Puesto/Profesión'
                  className={styles.textbox}
                  name='jobPosition'
                  register={register}
                />
              </div>
            </div>
            <div className='flex flex-col '>
              <label className='text-sm text-darkBlue'>
                Actividad Economica*
              </label>
              <div className='flex flex-col w-1/2 mb-3 gap-3 sm:flex-row'>
                <EconomicActivities />
              </div>
            </div>
          </div>
          <div className='mb-3 bg-white  items-center'>
            <label className='flex justify-center my-3 p-2 text-darkBlue'>
              {' '}
              Tiempo laborando (antigüedad)*.
            </label>
            <div className='pl-0'>
              <div className='mr-5'>
                <Radiobutton
                  type='radio'
                  id='lengthOfService'
                  name='lengthOfService'
                  register={register}
                  value='Menos de 6 meses.'
                  className=''
                >
                  {' '}
                  <label>Menos de 6 meses.</label>
                </Radiobutton>
              </div>
              <div className='ml-1'>
                <Radiobutton
                  type='radio'
                  id='lengthOfService'
                  name='lengthOfService'
                  register={register}
                  value='entre  6 meses < 1 Año.'
                >
                  {' '}
                  <label>entre 6 meses {'<'} 1 Año.</label>
                </Radiobutton>
              </div>
              <div className='mr-32'>
                <Radiobutton
                  type='radio'
                  id='lengthOfService'
                  name='lengthOfService'
                  register={register}
                  value='1 Año.         '
                >
                  {' '}
                  <label>1 Año.{'      '}</label>
                </Radiobutton>
              </div>
              <div className='mr-12'>
                <Radiobutton
                  type='radio'
                  id='lengthOfService'
                  name='lengthOfService'
                  register={register}
                  value=' Más de un año.'
                >
                  {' '}
                  <label>Más de un año.</label>
                </Radiobutton>
              </div>
            </div>
          </div>
          <div className='mb-3 bg-white'>
            <label className='flex justify-center my-3 p-2 text-darkBlue'>
              {' '}
              Ingreso mensual promedio.*
            </label>
            <div className='flex flex-col'>
              <div className='mr-3'>
                <Radiobutton
                  type='radio'
                  id='averageMonthlyIncome'
                  name='averageMonthlyIncome'
                  register={register}
                  value='De $5,000 a $10,000'
                >
                  {' '}
                  <label>De $5,000 a $10,000</label>
                </Radiobutton>
              </div>
              <div className='mr-2'>
                <Radiobutton
                  type='radio'
                  id='averageMonthlyIncome'
                  name='averageMonthlyIncome'
                  register={register}
                  value='De $11,000 a $20,000'
                >
                  {' '}
                  <label>De $11,000 a $20,000</label>
                </Radiobutton>
              </div>
              <div className='m-auto'>
                <Radiobutton
                  type='radio'
                  id='averageMonthlyIncome'
                  name='averageMonthlyIncome'
                  register={register}
                  value='De $21,000 a $30,000'
                >
                  {' '}
                  <label>De $21,000 a $30,000</label>
                </Radiobutton>
              </div>
              <div className='m-auto'>
                <Radiobutton
                  type='radio'
                  id='averageMonthlyIncome'
                  name='averageMonthlyIncome'
                  register={register}
                  value='De $31,000 a $40,000'
                >
                  {' '}
                  <label>De $31,000 a $40,000</label>
                </Radiobutton>
              </div>
              <div className='pl-4'>
                <Radiobutton
                  type='radio'
                  id='averageMonthlyIncome'
                  name='averageMonthlyIncome'
                  register={register}
                  value='De $41,000 en adelante  '
                >
                  {' '}
                  <label>De $41,000 en adelante</label>
                </Radiobutton>
              </div>
            </div>
          </div>
          <div className='w-full mb-3 bg-white'>
            <label className='text-darkBlue'>
              Adjuntar talonarios de pago 3 últimos.
            </label>
            <div className='flex justify-between mb-3'>
              <select className={styles.textbox} type='text'>
                <option value=''>Selecciona tus archivos</option>
                <option value=''>Archivo 1</option>
                <option value=''>Archivo 1</option>
                <option value=''>Archivo 3</option>
              </select>
            </div>

            <div className='flex-row justify-between items-center'>
              <Input
                className={styles.textbox}
                type='file'
                accept='image/*'
                name='user[image]'
                multiple
                onChange={imageChange}
                register={register}
              />
              <div className='flex overflow-auto mb-3 p-2'>
                {selectedImage &&
                  [...selectedImage].map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      className='w-32 h-32 mr-1 rounded-sm border-2'
                    />
                  ))}
              </div>

              {selectedImage && (
                <button
                  onClick={removeSelectedImage}
                  className='border bg-red w-[30%] h-10 rounded-lg text-white text-xl shadow-sm text-center'
                >
                  Eliminar
                </button>
              )}
            </div>
            <label className='text-darkBlue'>
              Adjuntar talonarios de pago 3 últimos.
            </label>
            <Input
              type='file'
              className={styles.textbox}
              name='ine'
              register={register}
            />
            <p
              className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300'
              id='file_input_help'
            >
              PNG, JPG ó PDF (MAX. 800x400px).
            </p>
          </div>
          <div className='w-full mb-3 bg-white'>
            <label className='text-darkBlue'>
              Adjuntar Referencia laboral.
            </label>
            <Input
              type='file'
              className={styles.textbox}
              name='ine'
              register={register}
            />
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
                  onClick={handleSubmit(onSubmitWorkFormUpdate)}
                 // disabled={loading}
                  className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
                  text='Guardar'
                />

              : <button
                  type='submit'
                  onClick={handleSubmit(onSubmitWorkForm)}
                 // disabled={loading}
                  className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
                  text='Guardar'
                />} */}

            {/*    <button
              type='submit'
              onClick={handleSubmit(onSubmitWorkForm)}
              disabled={loading}
              className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
            >
              {loading ? 'cargando' : 'Guardar'}
            </button>
 */}
            <button
              type='submit'
              onClick={handleSubmit(onSubmitWorkFormUpdate)}
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
      </FormProvider>
    </div>
  )
}

export default RegisterForms
