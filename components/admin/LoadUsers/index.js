import { useState } from 'react'
import Modal from '../../common/Modal'
import FormUsers from './FormUsers'
import HeaderPagesDashboard from '../../common/HeaderPagesDashboard'
import { UsersIcon } from '@heroicons/react/20/solid'
import useGetListCustomer from '../../../hooks/useGetListCustomer'
import Loading from '../../common/Loading'

/* const TableDataMock = [{
  id: 1,
  fullName: 'martha ad',
  email: 'martha@mail.com',
  company: 'art',
  phone: '12312312'
},
{
  id: 2,
  fullName: 'luis asd',
  email: 'luisa@mail.com',
  company: 'luis',
  phone: '12312312'
}, {
  id: 3,
  fullName: 'meil asd',
  email: 'meil@mail.com',
  company: 'meil',
  phone: '12312312'
}, {
  id: 4,
  fullName: 'pablo asd',
  email: 'pablo@mail.com',
  company: 'pablo',
  phone: '12312312'
}]
 */
const LoadUser = () => {
  const { loading, listCustomer } = useGetListCustomer()
  const [open, setOpen] = useState(null)
  const [index, setIndex] = useState(1)
  console.log({ listCustomer })

  if (loading) return <Loading />

  return (
    <>
      <HeaderPagesDashboard icon={<UsersIcon className='h-10 w-10' color='#477EFA' />} title='Lista de Usuarios' />
      <div className='bg-white h-auto shadow-sm mt-4'>
        <div className='overflow-x-auto md:col-span-3'>
          <h1 className='mb-4 text-xl'>Buscar</h1>
          <div className='overflow-x-auto items-center'>
            <table className='min-w-full'>
              <thead className='border-b bg-darkBlue shadow-lg'>
                <tr>

                  <th className='p-5 text-left text-white'>NOMBRE</th>
                  <th className='p-5 text-left text-white'>APELLIDO</th>
                  <th className='p-5 text-left text-white'>EMAIL</th>

                  <th className='p-5 text-left text-white'>TELEFONO</th>
                  <th className='p-5 text-left text-white'>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {
                  listCustomer?.map(data => (
                    <tr className='border-b' key={data?.id}>

                      <td className=' p-5 '>{data?.firstName}</td>
                      <td className=' p-5 '>{data?.firstLastName}</td>
                      <td className=' p-5 '>{data?.email}</td>

                      <td className=' p-5 '>{data?.phoneNumber}</td>
                      <td className=' p-5 '>
                        <button
                          type='button'
                          className=' border bg-darkBlue w-1/2 h-10 rounded-lg text-white text-xl shadow-lg text-center'
                          onClick={() => setOpen(data)}
                        >
                          Editar
                        </button>
                      </td>
                    </tr>

                  ))
}

              </tbody>
            </table>
          </div>
        </div>
        <Modal open={Boolean(open)} setOpen={() => setOpen(null)}>
          <FormUsers users={open} close={() => setOpen(null)} />
        </Modal>
      </div>
    </>
  )
}

export default LoadUser