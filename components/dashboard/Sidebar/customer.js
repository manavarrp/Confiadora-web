import Link from 'next/link'
import { useRouter } from 'next/router'
import {
<<<<<<< Updated upstream
  CreditCardIcon,
  HomeIcon,
  UserIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon
=======
  HomeIcon,
  UserIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  TicketIcon
>>>>>>> Stashed changes
} from '@heroicons/react/24/solid'

const CustomerLinks = () => {
  const router = useRouter()
  return (
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    <div className='flex flex-col'>
      <Link href='/customer'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/customer'
                ? 'bg-darkBlue  text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <HomeIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>
      </Link>

      <Link href='/customer/personal-form/personal-data'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/customer/personal-form/personal-data'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <UserIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Formulario</p>
          </div>
        </div>
      </Link>

<<<<<<< Updated upstream
      <Link href='/billing'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/billing'
=======
      <Link href='/customer/credits-aplications'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/customer/credits-aplications'
>>>>>>> Stashed changes
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
<<<<<<< Updated upstream
            <CreditCardIcon className='h-5 w-5' />
=======
            <TicketIcon className='h-5 w-5' />
>>>>>>> Stashed changes
          </div>
          <div>
            <p>Solicitudes</p>
          </div>
        </div>
      </Link>

      <Link href='/billing'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/billing'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <CircleStackIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Pre-Aprobados</p>
          </div>
        </div>
      </Link>

      <Link href='/billing'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/billing'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <ClipboardDocumentCheckIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Reportes</p>
          </div>
        </div>
      </Link>
    </div>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  )
}

export default CustomerLinks
