
import Input from '../../common/Input'
import styles from '../../../styles/Username.module.css'
import { useForm } from 'react-hook-form'
import useChangePassword from '../../../hooks/useChangePassword'

function ChangePassword () {
  // const router = useRouter()

  const { setNewPassword } = useChangePassword()

  const {
    register,
    handleSubmit
  //  formState: { errors }
  } = useForm({
  //  resolver: yupResolver(firstLoginSchema),
    initialValues: {
      currentPassword: '',
      newPassword: ''
    }
  })

  const onSubmitChangePassword = (data) => {
    // router.push('/customer/personal-form/work-data')
    setNewPassword(data)
  }

  return (
    <>

      <div>
        <form onSubmit={handleSubmit(onSubmitChangePassword)}>

          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Contraseña actual</label>
              <Input
                type='text'
                placeholder='Contraseña actual'
                className={styles.textbox}
                name='currentPassword'
                register={register}
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Nueva contraseña</label>
              <Input
                type='text'
                placeholder='Nueva contraseña'
                className={styles.textbox}
                name='newPassword'
                register={register}
              />
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button type='submit' className={styles.btn}>
              Cambiar
            </button>
          </div>

        </form>
      </div>
    </>
  )
}

export default ChangePassword
