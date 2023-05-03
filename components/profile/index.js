
import Input from '../common/Input'
import styles from '../../styles/Username.module.css'

import useGetProfile from '../../hooks/useGetProfile'
import Loading from '../common/Loading'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import ChangePasswordProfile from './ChangePasswordProfile'
import { IdentificationIcon } from '@heroicons/react/24/solid'
import HeaderPagesDashboard from '../common/HeaderPagesDashboard'

function RegisterForms () {
  // const router = useRouter()

  const { loading, profile } = useGetProfile()

  if (loading) return <Loading />

  return (
    <>
      <HeaderPagesDashboard icon={<IdentificationIcon className='h-10 w-10' color='#477EFA' />} title='Mi Perfil' />
      <div className='w-full  pt-16  '>
        <div className='mx-auto w-3/4  rounded-2xl bg-white p-2 sm:w-full'>

          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row sm:w-full'>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Nombre Completo</label>
              <Input
                type='text'
                placeholder='Nombres Completos'
                className={styles.textbox}
                value={profile?.fullName}
                readOnly
              />
            </div>

          </div>

          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Correo</label>
              <Input
                type='text'
                placeholder='Nombres Completos'
                className={styles.textbox}
                value={profile?.email}
                readOnly
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Número de telefono</label>
              <Input
                type='text'
                placeholder='Nombres Completos'
                className={styles.textbox}
                value={profile?.phoneNumber}
                readOnly
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Tipo de documento</label>
              <Input
                type='text'
                placeholder='Nombres Completos'
                className={styles.textbox}
                value={profile?.identificationTypeName}
                readOnly
              />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-sm text-darkBlue'>Número de documento</label>
              <Input
                type='text'
                placeholder='Nombres Completos'
                className={styles.textbox}
                value={profile?.identificationNumber}
                readOnly
              />
            </div>
          </div>
          <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row' />

          <Disclosure as='div' className='mt-2'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span className='text-darkBlue font-bold text-lg'>¿Deseas cambiar la contraseña?</span>
                  <ChevronUpIcon
                    className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  <ChangePasswordProfile />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

    </>
  )
}

export default RegisterForms
