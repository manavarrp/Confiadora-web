import styles from '../../../styles/Username.module.css'
import Logo from '../../common/Logo'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import { firstLoginSchema } from '../../../utils/formSchema/firstLoginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { decodeToken } from '../../../utils/decodeToken'
import { changePassword } from '../../../services/api'
import { useRouter } from 'next/router'
import { auth } from '../../../utils/auth'
import { toast } from 'react-toastify'

const FirstLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(firstLoginSchema),
    initialValues: {
      currentPassword: '',
      newPassword: ''
    }
  })

  const router = useRouter()
  const { t: token = '' } = router?.query

  const firstLoginSubmit = async (values) => {
    const userInformation = decodeToken(token) || {}
    const payload = {
      ...values,
      token,
      changePassword: true,
      email: userInformation?.email
    }
    try {
      await changePassword(payload)
      const response = await auth({ token, ...userInformation })
      if (response.status === 200) {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        toast.success('Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.')
=======
        toast.success(
          'Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.'
        )
>>>>>>> Stashed changes
=======
        toast.success(
          'Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.'
        )
>>>>>>> Stashed changes
        return router.replace('/auth/login')
      }
      // console.log('error')
    } catch (e) {
      // console.log('error')
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex justify-center items-center h-screen'>
          <div className='md:w-[400px] shadow-xl shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
            <Logo />

            <div className='title flex flex-col items-center'>
              <span className=' text-sm w-2/3 text-center text-gray mb-5'>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                Por favor ingresa la contraseña que se envió a tu correo y cambiala por una personal.
=======
                Por favor ingresa la contraseña que se envió a tu correo y
                cambiala por una personal.
>>>>>>> Stashed changes
=======
                Por favor ingresa la contraseña que se envió a tu correo y
                cambiala por una personal.
>>>>>>> Stashed changes
              </span>
            </div>
            <form onSubmit={handleSubmit(firstLoginSubmit)}>
              <div className='textbox flex flex-col items-center gap-6'>
                <Input
                  type='text'
                  placeholder='Contraseña actual'
                  className={styles.textbox}
                  name='currentPassword'
                  register={register}
                  error={errors?.currentPassword?.message}
                />

                <Input
                  type='text'
                  placeholder='Contraseña nueva'
                  className={styles.textbox}
                  name='newPassword'
                  register={register}
                  error={errors?.newPassword?.message}
                />

                <button
                  type='submit'
                  className={styles.btn}
                  // disabled={isLoading}
                >
                  Cambiar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstLogin
