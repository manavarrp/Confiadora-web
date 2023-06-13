
import DropBox from '../../common/DropBox'
import HeaderPagesDashboard from '../../common/HeaderPagesDashboard'
import { CloudArrowDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const LoadInfomartion = ({ errors }) => {
  return (
    <>
      <HeaderPagesDashboard icon={<CloudArrowDownIcon className='h-10 w-10' color='#477EFA' />} title='Carga Masiva de Clientes con Alianza' />
      <div className='grid lg:grid-cols-1 gap-5 my-16'>
        <div className='bg-white rounded h-30 shadow-sm '>
          <div className='w-full mb-3 bg-white'>
            <label className='text-darkBlue'>
              Adjuntar achivo de carga masiva de clientes con Alianza.
            </label>

            <DropBox className='p-10 mt-5 border-2 border-gray rounded-md' />
            <Link
              href='https://docs.google.com/spreadsheets/d/13YgThpXGpIOoJ6ZVCnpVbab1aqdPyEmC/copy'
              target='_blank'
              className='text-darkBlue w-full hover:cursor-pointer' rel='noreferrer'
            >
              <label
                className='transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                data-te-toggle='tooltip'
                title='Por favor valida que todos los campos obligatorios esten correctamente diligenciados.'
              >
                <span className='hover:cursor-pointer w-full'>
                  {' '}
                  Haz clic aqui para descargar la plantilla.
                </span>
              </label>
            </Link>
            <div className='mt-3'>
              <ul>
                <p
                  className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300 italic'
                  id='file_input_help'
                >
                  * Tipo de archivo CSV (MAX. 1024 * 1000).

                </p>

              </ul>
              <ul>
                <p
                  className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300 italic'
                  id='file_input_help'
                >
                  * Algunos campos son obligatorios y se deben completar.
                </p>
              </ul>
              <ul>
                <p
                  className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300 italic'
                  id='file_input_help'
                >
                  * Archivo separado por punto y coma.
                </p>
              </ul>

              <ul>
                <p
                  className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300 italic'
                  id='file_input_help'
                >
                  * Tenga en cuenta que la primera fila es el encabezado.
                </p>
              </ul>

              <ul>
                <p
                  className='ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300 italic'
                  id='file_input_help'
                >
                  * Validar caracteres especiales como tildes, letra ñ.
                </p>
              </ul>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoadInfomartion
