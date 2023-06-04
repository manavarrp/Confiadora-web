<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useState } from 'react'
import { UserPlusIcon, UsersIcon } from '@heroicons/react/20/solid'
=======
import React, { useEffect, useState } from 'react'
import { UserPlusIcon } from '@heroicons/react/20/solid'
>>>>>>> Stashed changes
=======
import React, { useEffect, useState } from 'react'
import { UserPlusIcon } from '@heroicons/react/20/solid'
>>>>>>> Stashed changes
import FormCreateConsultant from './FormCreateConsultant'
import FormEditConsultant from './FormEditConsultant'
import Modal from '../../common/Modal'
import HeaderPagesDashboardButt from '../../../components/common/HeaderPagesDashboardButt'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
import { Table } from 'antd'
>>>>>>> Stashed changes
=======
import { Table } from 'antd'
>>>>>>> Stashed changes

const TableDataMock = [{
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

const CreateConsultant = () => {
  const [open, setOpen] = useState(false)

  const [openEdit, setOpenEdit] = useState(false)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes

  const [dataSource, setDataSource] = useState([])

  const columns = [{
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'NOMBRE',
    dataIndex: 'fullName'
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    sorter: (a, b) => a.email > b.email
  },
  {
    title: 'EMPRESA',
    dataIndex: 'company'
  },
  {
    title: 'TELEFONO',
    dataIndex: 'phone'
  },
  {
    title: 'ACCIONES',
    dataIndex: 'acciones'
  }]

  useEffect(() => {
    setDataSource(TableDataMock)
  }, [])

  // console.log({ dataSource })
  const data = dataSource.map(row => ({ id: row.id, fullName: row.fullName, email: row.email, company: row.company, phone: row.phone }))

  // console.log({ data })
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  return (
    <>
      <div className='flex justify-between mt-8'>

        <HeaderPagesDashboardButt icon={<UserPlusIcon className='h-10 w-10' color='#477EFA' />} title='Lista de Asesores' />
        <button
          type='button'
          className='inline-flex items-center px-4 py-2 border bg-darkBlue h-12 rounded-lg text-white text-xl shadow-sm text-center'
          onClick={() => setOpen(true)}
        >
          <UserPlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Crear Asesor
        </button>

      </div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
      <div className='bg-white h-auto shadow-sm mt-4'>
        <div className='overflow-x-auto md:col-span-3'>

          <div className='overflow-x-auto items-center'>
            <Table
              columns={columns} dataSource={data} pagination={{
                pageSize: 50
              }}
            />
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

      <div className='bg-white h-auto shadow-sm mt-4'>
        <div className='overflow-x-auto md:col-span-3'>
          <h1 className='mb-4 text-xl'>Buscar</h1>
          <div className='overflow-x-auto items-center'>
            <table className='min-w-full'>
              <thead className='border-b bg-darkBlue shadow-lg'>
                <tr>
                  <th className='px-5 text-left text-white'>ID</th>
                  <th className='p-5 text-left text-white'>NOMBRE</th>
                  <th className='p-5 text-left text-white'>EMAIL</th>
                  <th className='p-5 text-left text-white'>EMPRESA</th>
                  <th className='p-5 text-left text-white'>TELEFONO</th>
                  <th className='p-5 text-left text-white'>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {
                  TableDataMock.map(data => (
                    <tr className='border-b' key={data.id}>
                      <td className=' p-5 '>{data.id}</td>
                      <td className=' p-5 '>{data.fullName}</td>
                      <td className=' p-5 '>{data.email}</td>
                      <td className=' p-5 '>{data.company}</td>
                      <td className=' p-5 '>{data.phone}</td>
                      <td className=' p-5 '>
                        <button
                          type='button'
                          className=' border bg-darkBlue w-1/2 h-10 rounded-lg text-white text-xl shadow-lg text-center'
                          onClick={() => setOpenEdit(data)}
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
          <FormCreateConsultant users={open} close={() => setOpen(null)} />
        </Modal>

        <Modal open={Boolean(openEdit)} setOpen={() => setOpenEdit(null)}>
          <FormEditConsultant users={openEdit} close={() => setOpenEdit(null)} />
        </Modal>
      </div>
    </>
  )
}

export default CreateConsultant
