import { useRouter } from 'next/router'
import { FormProvider, useForm } from 'react-hook-form'
import usePostPersonPhysical from '../../../../hooks/usePostPersonPhysical'
import styles from '../../../../styles/Username.module.css'
import Input from '../../../common/Input'
import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import Countrys from '../../../Catalogs/Countrys'
import useGetCountry from '../../../../hooks/useGetCountry'

const DEFAULT_VALUES = {
  fullName: '',
  genderName: '',
  birthDate: '',
  phoneNumber: '',
  identificationNumber: '',
  identificationTypeName: '',
  email: '',
  birthCountryId: '',
  secondaryPhoneNumber: '',
  birthCountryName: '',
  birthStateName: '',
  fiel: '',
  nationality: ''
}

function RegisterForms ({ initialValues }) {
  // console.log({ initialValues });
  const router = useRouter()

  const { customerId } = useSelector((state) => state.physicalPersonForm)

  const valuesStates = useGetCountry(initialValues?.countries)

  const methods = useForm({
    // resolver: yupResolver(loginSchema),

    defaultValues: initialValues || DEFAULT_VALUES
  })
  // const idTypes = useGetCountry()

  const {
    register,
    handleSubmit,
    setValue
    // getValues,
    // formState: { errors }
  } = methods

  const handleCountryChange = (event) => {
    const id = event.target.value
    const country = valuesStates.find(country => country.id === id)
    console.log({ country, id, valuesStates })
    setValue('birthCountryName', id)
    setValue('nationality', country?.nationality || '')
  }

  const { loading, postPersonPhysicalData } = usePostPersonPhysical()

  const { data } = useSession()

  const onSubmitPersonForm = (data) => {
    const payload = {
      birthCountryId: data.birthCountryId,
      secondaryPhoneNumber: data.secondaryPhoneNumber,
      fiel: data.fiel,
      customerId
    }
    postPersonPhysicalData(payload, '/natural-person/personal-data')
  }

  const onClickNext = () => {
    // if (isDirty) return <Modal closeModal={closeModal} />
    router.push('/customer/personal-form/address-data')
    // console.log({ values });
  }

  return (
    <div className=''>
      <FormProvider {...methods}>
        <form className='mx-auto max-w-screen-md'>
          <div className='w-full mb-3'>
            <label className='text-sm text-darkBlue'>Nombre Completo</label>
            <Input
              type='text'
              placeholder='Nombres Completos'
              className={styles.textbox}
              name='fullName'
              register={register}
              // onBlurData={onBlurData}
              readOnly
            />
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>Teléfono</label>
              <Input
                type='text'
                placeholder='Teléfono'
                className={styles.textbox}
                name='phoneNumber'
                register={register}
                readOnly
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>
                Correo Electronico
              </label>
              <Input
                type='text'
                placeholder='Correo Electronico'
                className={styles.textbox}
                name='email'
                register={register}
                readOnly
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>
                Fecha de nacimiento
              </label>
              <Input
                type='text'
                placeholder='Fecha de nacimiento'
                className={styles.textbox}
                name='birthDate'
                register={register}
                readOnly
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>
                Estado de Nacimiento
              </label>
              <Input
                type='text'
                placeholder='Estado de Nacimiento'
                className={styles.textbox}
                name='birthStateName'
                register={register}
                readOnly
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>Tipo de Documento</label>
              <Input
                type='text'
                placeholder='CURP'
                className={styles.textbox}
                name='identificationTypeName'
                register={register}
                // error={errors?.phoneNumber?.message}
                readOnly
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>
                Número de documento
              </label>
              <Input
                type='text'
                placeholder='RFC'
                className={styles.textbox}
                name='identificationNumber'
                register={register}
                readOnly
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-1/3'>
              <label className='text-sm text-darkBlue'>Sexo</label>
              <Input
                type='text'
                placeholder='Genero'
                className={styles.textbox}
                name='genderName'
                register={register}
                // error={errors?.phoneNumber?.message}
                readOnly
              />
            </div>
            <div className='flex flex-col w-1/3'>
              <label className='text-sm text-darkBlue'>
                Teléfono Secundario
              </label>
              <Input
                type='text'
                placeholder='Teléfono Secundario'
                className={styles.textbox}
                name='secondaryPhoneNumber'
                register={register}
              />
            </div>
            <div className='flex flex-col w-1/3'>
              <label className='text-sm text-darkBlue ml-1'>FIEL</label>
              <Input
                type='text'
                placeholder='fiel'
                className={styles.textbox}
                name='fiel'
                register={register}
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>País de Nacimiento</label>
              <Countrys
                onChange={handleCountryChange}
                register={register}
                name='domicileStateId'
                options={valuesStates}
                emptyOptions='Pais de residencia'
                className={styles.textbox}
              />
            </div>
            <div className='flex flex-col w-1/2'>
              <label className='text-sm text-darkBlue'>
                Nacionalidad
              </label>
              <Input
                type='text'
                placeholder='Nacionalidad'
                className={styles.textbox}
                name='nationality'
                register={register}
                readOnly
              />
            </div>
          </div>

          <div className='w-full mb-3 bg-white'>
            <label className='text-darkBlue'>
              Adjuntar foto INE por ambos lados.
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
          <div className='flex justify-around mt-5'>
            <button
              onClick={handleSubmit(onSubmitPersonForm)}
              disabled={loading}
              type='submit'
              className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
            >
              {loading ? 'cargando' : 'Guardar'}
            </button>
            <button
              onClick={handleSubmit(onClickNext)}
              type='submit'
              className=' border bg-darkBlue w-full h-12 rounded-lg text-white text-xl shadow-sm text-center sm:w-1/4'
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
