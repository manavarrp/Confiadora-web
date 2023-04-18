import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../../styles/Username.module.css'
import Logo from '../../common/Logo'
import Input from '../../common/Input'
import Link from 'next/link'
import useLoginWithCode from '../../../hooks/useLoginWithCode'
import { useSession } from 'next-auth/react'

const LoginWithCode = () => {
  const router = useRouter()

  const { register, handleSubmit } = useForm({
    initialValues: { twoFactorAuthenticationToken: '' }
  })

  const { e } = router.query

  const { data } = useSession()

  const { login, isLoading } = useLoginWithCode()

  const userLoginWithCode = async (data) => {
    const payload = {
      ...data,
      email: e
    }
    await login(payload)
  }

  const resentCodeOtp = () => {

  }

  return (

    <div className='md:w-[350px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center '>
      <div className='title flex flex-col items-center'>
        <Logo />
        <span className='text-xl w-2/3 text-center text-gray'>OTP</span>
      </div>
      <form onSubmit={handleSubmit(userLoginWithCode)}>
        <div className='textbox flex flex-col items-center gap-6'>
          <span className='py-4 text-sm  text-gray text-center'>
            Ingresa el codigo de 6 digitos enviado a tu correo
          </span>
          <Input
            type='text'
            placeholder='Codigo OTP'
            className={styles.textbox}
            name='twoFactorAuthenticationToken'
            register={register}
          />

          <button
            type='submit'
            className={styles.btn}
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Enviar'}
          </button>
          <div className='text-center py-2 text-gray'>
            {/*  <span>
              ¿ No llegó el codigo ?
              <Link className='text-darkBlue' href='' onClick={resentCodeOtp}>
                {' '}
                Re-enviar
              </Link>
            </span> */}
          </div>
        </div>
      </form>
    </div>

  )
}

export default LoginWithCode
