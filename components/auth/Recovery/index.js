import React, { useEffect } from 'react'
import styles from '../../../styles/Username.module.css'
import { useRouter } from 'next/router'
import authService from '../../../features/auth/authServices'
import Logo from '../../common/Logo'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import { recoveryPasswordSchema } from '../../../utils/formSchema/recoveryPasswordSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSession } from 'next-auth/react'

const ResetPasswordConfirm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(recoveryPasswordSchema),
    initialValues: {
      newPassword: '',
      confirmPassword: ''
    }
  })

  const { data } = useSession()

  const router = useRouter()

  const { isSuccess, isLoading } = useSelector((state) => state.auth)

  const onForgotPasswordFormSubmitted = async (data) => {
    const payload = {
      ...data,
      uid: router.query.uid,
      token: router.query.token
    }

    try {
      const response = await authService.passwordResetConfirm(payload)
<<<<<<< Updated upstream
      //console.log(response)
      toast.success('Contraseña cambiada con exito')
      router.push('/login')
    } catch (e) {
      //console.log(e)
=======
      // console.log(response)
      toast.success('Contraseña cambiada con exito')
      router.push('/login')
    } catch (e) {
      // console.log(e)
>>>>>>> Stashed changes
      toast.error('A ocurrido un error')
    }
  }

  useEffect(() => {
    if (!isLoading && isSuccess) {
      router.push('/login')
    }
  }, [router, isLoading, isSuccess])

  return (
    <>
<<<<<<< Updated upstream

      <div className='md:w-[400px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
=======
      <div className='md:w-[400px] shadow-xl shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
>>>>>>> Stashed changes
        <Logo />
        <div className='title flex flex-col items-center'>
          <span className=' text-xl w-2/3 text-center text-gray'>
            Ingresa la nueva Contraseña
          </span>
        </div>
        <form
          className='py-20'
          onSubmit={handleSubmit(onForgotPasswordFormSubmitted)}
        >
          <div className='textbox flex flex-col items-center gap-6'>
            <Input
              type='text'
              placeholder='Contraseña Nueva'
              className={styles.textbox}
              name='newPassword'
              register={register}
              error={errors?.newPassword?.message}
            />
<<<<<<< Updated upstream

            <Input
              type='text'
              placeholder='Confirmar Contraseña'
              className={styles.textbox}
              name='confirmPassword'
              register={register}
              error={errors?.confirmPassword?.message}
            />

            <button
              type='submit'
              className={styles.btn}
              disabled={isLoading}
            >
              {isLoading ? 'cargando' : 'Cambiar'}
            </button>
          </div>
        </form>
      </div>
=======
>>>>>>> Stashed changes

            <Input
              type='text'
              placeholder='Confirmar Contraseña'
              className={styles.textbox}
              name='confirmPassword'
              register={register}
              error={errors?.confirmPassword?.message}
            />

            <button type='submit' className={styles.btn} disabled={isLoading}>
              {isLoading ? 'cargando' : 'Cambiar'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPasswordConfirm
