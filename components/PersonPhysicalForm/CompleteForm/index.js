import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import FullAddress from '../../FullAddress'

function RegisterForms () {
  // const router = useRouter()
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    initialValues: {
      UserName: '',
      Password: ''
    }
  })

  /*  const onSubmitPersonFormNext = () => {
    router.push('/customer/personal-form/work-data')
  }
 */
  return (
    <div className=''>
      <form className='mx-auto max-w-screen-md'>
        <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
          <FullAddress />
        </div>
        <div className='flex justify-between mt-5'>
          <button
            type='submit'
            className=' border bg-blue w-1/4 py-4 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForms
