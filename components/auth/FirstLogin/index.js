import styles from '../../../styles/Username.module.css'
import Logo from '../../common/Logo'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import { buildFirstloginSchema } from '../../../utils/formSchema/firstLoginSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { decodeToken } from '../../../utils/decodeToken'
import { changePassword } from '../../../services/api'
import { useRouter } from 'next/router'
import { auth } from '../../../utils/auth'
import { toast } from 'react-toastify'
import { Checkbox } from '../../common/Checkbox'
import Link from 'next/link'

const FirstLogin = () => {
  const router = useRouter()
  const { t: token = '', term = 'false' } = router?.query

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(buildFirstloginSchema(term)),
    initialValues: {
      currentPassword: '',
      newPassword: '',
      AcceptTermsAndConditions: false
    }
  })

  console.log({ errors })

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
        toast.success(
          'Cambio realizadó con exito, ya puedes ingresar con tu nueva contraseña.'
        )
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
                Por favor ingresa la contraseña que se envió a tu correo y
                cambiala por una personal.
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
                {term === 'true'
                  ? (
                    <div className='flex flex-col justify-center items-center mt-2 w-full'>
                      <Checkbox
                        id='AcceptTermsAndConditions'
                        type='checkbox'
                        name='AcceptTermsAndConditions'
                        register={register}
                        error={errors?.AcceptTermsAndConditions?.message}
                      >
                        <label>
                          <Link
                            href='/termin'
                            target='_blank'
                            className='text-blue w-full hover:cursor-pointer'
                          >
                            <label
                              className='transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                              data-te-toggle='tooltip'
                              title='Debes aceptar terminos y condiciones para el registro'
                            >
                              <span className='hover:cursor-pointer w-full'>
                                {' '}
                                Términos y condiciones
                              </span>
                            </label>
                          </Link>
                        </label>
                      </Checkbox>
                    </div>
                    )
                  : ''}

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
