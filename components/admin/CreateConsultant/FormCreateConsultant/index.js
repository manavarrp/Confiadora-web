import { useForm } from 'react-hook-form'
import styles from '../../../../styles/Username.module.css'
import Input from '../../../common/Input'
import usePostCreateConsultant from '../../../../hooks/usePostCreateConsultant'

function RegisterForms ({ close }) {
  const { loading, postCreateConsultant } = usePostCreateConsultant()
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm()

  const onSubmitPostConsultant = (data) => {
    postCreateConsultant(data).then((response) => {
      response && close()
    })
  }
  return (
    <form>
      <div className='overflow-hidden'>
        <div className='flex justify-around text-darkBlue mb-5'>
          <h2 className='text-darkBlue text-lg font-semibold'>
            Formulario para crear Asesor
          </h2>

        </div>

        <div className=''>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <Input
              type='text'
              placeholder='Primer nombre'
              className={styles.textbox}
              name='firstName'
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
              name='phoneNumber'
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
        <div className='flex justify-around'>
          <button
            type='submit'
            onClick={handleSubmit(onSubmitPostConsultant)}
            className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Crear
          </button>
        </div>
      </div>
    </form>
  )
}

export default RegisterForms
