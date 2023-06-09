import { useForm } from 'react-hook-form'
import styles from '../../../../styles/Username.module.css'
import Input from '../../../common/Input'
import { useEffect } from 'react'
import usePutDataCustomer from '../../../../hooks/usePutDataCustomer'

const DEFAUL_VALUES = {
  fullName: '',
  secondName: '',
  firstLastName: '',
  secondLastName: '',
  phone: '',
  company: '',
  email: ''
}

function RegisterForms ({ users, close }) {
  console.log({ users })

  const { loading, putDataCustomer } = usePutDataCustomer()
  const {
    register,
    handleSubmit,
    reset
    // formState: { errors }
  } = useForm({
    initialValues: users
      ? {
          ...users
        }
      : DEFAUL_VALUES
  })

  useEffect(() => {
    if (users) {
      reset(users)
    }
  }, [users, reset])

  const onSubmitPutCustomer = (data) => {
    putDataCustomer(data).then((response) => {
      response && close()
    })
  }
  return (
    <form>
      <div className=''>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Primer nombre'
            className={styles.textbox}
            name='fullName'
            register={register}
          />
          <Input
            type='text'
            placeholder='Segundo nombre'
            className={styles.textbox}
            name='secondName'
            register={register}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='Apellido Paterno'
            className={styles.textbox}
            name='firstLastName'
            register={register}
          />
          <Input
            type='text'
            placeholder='Apellido Materno '
            className={styles.textbox}
            name='secondLastName'
            register={register}
          />
        </div>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <Input
            type='text'
            placeholder='phone'
            className={styles.textbox}
            name='phone'
            register={register}
          />
          <Input
            type='text'
            placeholder='Empresa'
            className={styles.textbox}
            name='company'
            register={register}
          />

        </div>
        <div className='w-full mb-3'>
          <Input
            type='text'
            placeholder='Correo electronico'
            className={styles.textbox}
            name='email'
            register={register}
          />
        </div>
      </div>
      <button
        type='submit'
        onClick={handleSubmit(onSubmitPutCustomer)}
        className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
      >
        Guardar
      </button>
    </form>
  )
}

export default RegisterForms
