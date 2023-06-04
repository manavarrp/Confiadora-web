import { useRouter } from 'next/router'
import { useFieldArray, useForm } from 'react-hook-form'
import styles from '../../../../styles/Username.module.css'
import Input from '../../../common/Input'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import usePostPersonPhysical from '../../../../hooks/usePostPersonPhysical'

const loadingInitValues = (initialValues, customerId) => {
  const DEFAULT_VALUES = {
    customerId,
    fullName: '',
    occupation: '',
    timeOfKnowing: '',
    relationship: '',
    phoneNumber: '',
    id: ''
  }
  if (initialValues.length === 0) return [DEFAULT_VALUES, DEFAULT_VALUES]
  if (initialValues.length === 1) return [...initialValues, DEFAULT_VALUES]
  return initialValues
}

function RegisterForms ({ initialValues }) {
  // console.log(initialValues, 'valores inicialesss')

  const { customerId } = useSelector((state) => state.physicalPersonForm)
  // console.log(initialValues)
  const router = useRouter()

  const { control, register, handleSubmit } = useForm({
    // resolver: yupResolver(loginSchema),

    defaultValues: {
      personalReferences: loadingInitValues(initialValues, customerId)
    }
  })
  const { fields } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'personalReferences'
  })

  // console.log({ fields }, { initialValues })

  const { loading, postPersonPhysicalData } = usePostPersonPhysical()
  // const { putPersonPhysicalData } = usePutPersonPhysical()

  const { data } = useSession()

  const onSubmitReferencesForm = (data) => {
    const payload = {
      ...data,
      id: data?.personalReferences[0]?.id
    }

    postPersonPhysicalData(payload, '/natural-person/personal-references')
    // setPersonalReferences(personalReferences => [...personalReferences, personalReference])

    // //console.log(payload, 'perosnal referencia')
  }

  const onSubmitPersonFormNext = () => {
    // router.push('/customer/personal-form/confirm-data')
  }

  const onSubmitPersonFormBack = () => {
    router.push('/customer/personal-form/add-data')
  }

  return (
    <div className=''>
      <form className='mx-auto max-w-screen-md'>
        {fields.map((field, index) => (
          <div key={field.id}>
            <h4 className='font-bold mb-3 text-darkBlue'>
              Referencia Personal {index + 1}
            </h4>
            <div className='w-full mb-3'>
              <div className='flex flex-col w-full'>
                <input
                  type='hidden'
                  {...register(`personalReferences.${index}.customerId`)}
                />
                <label className='text-sm text-darkBlue'>
                  Nombres Completos*
                </label>
                <Input
                  type='text'
                  placeholder='Nombres Completos'
                  className={styles.textbox}
                  name={`personalReferences.${index}.fullName`}
                  register={register}
                />
              </div>
            </div>
            <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
              <div className='flex flex-col w-full'>
                <label className='text-sm text-darkBlue'>Ocupación*</label>
                <Input
                  type='text'
                  placeholder='Ocupación'
                  className={styles.textbox}
                  name={`personalReferences.${index}.occupation`}
                  register={register}
                />
              </div>
              <div className='flex flex-col w-full'>
                <label className='text-sm text-darkBlue'>Teléfono*</label>
                <Input
                  type='text'
                  placeholder='Teléfono'
                  className={styles.textbox}
                  name={`personalReferences.${index}.phoneNumber`}
                  register={register}
                />
              </div>
            </div>
            <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
              <div className='flex flex-col w-full'>
                <label className='text-sm text-darkBlue'>
                  Tiempo de conocerlo*
                </label>
                <Input
                  type='text'
                  placeholder='Tiempo de conocerlo'
                  className={styles.textbox}
                  name={`personalReferences.${index}.timeOfKnowing`}
                  register={register}
                />
              </div>
              <div className='flex flex-col w-full'>
                <label className='text-sm text-darkBlue'>Relación*</label>
                <Input
                  type='text'
                  placeholder='Relación'
                  className={styles.textbox}
                  name={`personalReferences.${index}.relationship`}
                  register={register}
                />
              </div>
            </div>
          </div>
        ))}
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
          <button
            type='submit'
            onClick={handleSubmit(onSubmitReferencesForm)}
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
