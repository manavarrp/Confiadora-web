import Link from 'next/link'
import { useRouter } from 'next/router'
import {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  CreditCardIcon,
  HomeIcon,
  UserIcon,
=======
  HomeIcon,
>>>>>>> Stashed changes
=======
  HomeIcon,
>>>>>>> Stashed changes
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CloudArrowDownIcon,
  UserPlusIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/solid'

<<<<<<< Updated upstream
<<<<<<< Updated upstream
const AdminMenu = [{
  icon: <HomeIcon className='h-5 w-5' />,
  name: 'Home'
},
{
  icon: <UserIcon className='h-5 w-5' />,
  name: 'Usuarios'
}, {
  icon: <CreditCardIcon className='h-5 w-5' />,
  name: 'Informes'
}, {
  icon: <CircleStackIcon className='h-5 w-5' />,
  name: 'Home'
}]

=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
const AdminLinks = () => {
  const router = useRouter()
  return (

    <div className='flex flex-col'>
      <Link href='/admin'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/admin'
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

      <Link href='/admin/charge-data-users'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/admin/charge-data-users'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <CloudArrowDownIcon className='h-5 w-5' />
          </div>
          <div className='flex flex-row'>
            <p>Cargar Prospectos</p>
          </div>
        </div>
      </Link>
      <Link href='/admin/users'>
        <div
          className={`pl-5 py-3 mx-3  rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/admin/users'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <UsersIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Prospectos</p>
          </div>
        </div>
      </Link>
      <Link href='/admin/consultant'>
        <div
          className={`pl-5 py-3 mx-3  rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/admin/consultant'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <UserPlusIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Asesores</p>
          </div>
        </div>
      </Link>

      <Link href='/admin/validate-customer'>
        <div
          className={`pl-5 py-3 mx-3 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
            ${
              router.pathname === '/admin/validate-customer'
                ? 'bg-darkBlue text-white'
                : 'text-gray-dark hover:bg-gray-light hover:text-gray'
            }`}
        >
          <div className='mr-2'>
            <ClipboardDocumentCheckIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Solicitudes</p>
          </div>
        </div>
      </Link>

      <Link href='/billing'>
        <div
          className={`pl-5 py-3 mx-3  rounded text-center cursor-pointer mb-3 flex items-center transition-colors
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
            <p>Desembolso</p>
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
            <ClipboardDocumentIcon className='h-5 w-5' />
          </div>
          <div>
            <p>Reportes</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default AdminLinks
