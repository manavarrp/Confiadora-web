<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { useState } from 'react'
=======
/* import { useState } from 'react'
>>>>>>> Stashed changes
=======
/* import { useState } from 'react'
>>>>>>> Stashed changes
import Modal from '../../common/Modal'
import FormDataCustomer from './FormDataCustomer'
import HeaderPagesDashboard from '../../common/HeaderPagesDashboard'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid'

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

const LoadUser = () => {
  const [open, setOpen] = useState(null)

  return (
    <>
      <HeaderPagesDashboard icon={<ClipboardDocumentCheckIcon className='h-10 w-10' color='#477EFA' />} title='Lista de Solicitudes' />
      <div className='bg-white h-auto shadow-sm mt-4'>
        <div className='overflow-x-auto md:col-span-3'>
          <h1 className='mb-4 text-xl'>Buscar</h1>
          <div className='overflow-x-auto items-center'>
            <table className='min-w-full'>
              <thead className='border-b bg-darkBlue shadow-lg'>
                <tr>
                  <th className='px-5 text-left text-white'>NOMBRES</th>
                  <th className='p-5 text-left text-white'>EMPRESA</th>
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
                      <td className=' p-5 '>{data.fullName}</td>
                      <td className=' p-5 '>{data.company}</td>
                      <td className=' p-5 '>{data.email}</td>
                      <td className=' p-5 '>{data.phone}</td>
                      <td className=' p-5 '>{data.phone}</td>
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
          <FormDataCustomer users={open} close={() => setOpen(null)} />
        </Modal>
      </div>
    </>
  )
}

export default LoadUser
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
 */
import { Table, Input } from 'antd'
import { useEffect, useState } from 'react'
import usePostListCustomCustomer from '../../../hooks/usePostListCustomCustomer'
import { SearchOutlined } from '@ant-design/icons'
import styles from '../../../styles/Username.module.css'

function App () {
  const [pageNumber, setPageNumber] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [value, setSearchText] = useState('')
  const [columnName, setSearchColumn] = useState('')
  const { loading, postListCustomCustomer, listCustomer } = usePostListCustomCustomer()

  useEffect(() => {
    const payload = {
      pageNumber, itemsPerPage
    }
    postListCustomCustomer(payload)
  }, [pageNumber, itemsPerPage, postListCustomCustomer])

  const handlePageChange = (current, pageSize) => {
    setPageNumber(current)
    setItemsPerPage(pageSize)
    const payload = {
      pageNumber, itemsPerPage
    }
    postListCustomCustomer(payload)
  }

  // console.log({ pageNumber, itemsPerPage })

  function handleSearch (values, column) {
    setSearchText(values)
    setSearchColumn(column)
    // console.log({ columnName, value })
  }

  useEffect(() => {
    const payload = {

      filters: [
        {
          columnName,
          value
        }
      ]
    }
    console.log({ payload })
    postListCustomCustomer(payload)
  }, [columnName, value, postListCustomCustomer])
  const columns = [

    {
      title: 'Nombres',
      dataIndex: 'firstName',
      sorter: (a, b) => a.firstName - b.firstName,
      filterDropdown: () => { return <Input.Search placeholder='Search' onSearch={values => handleSearch(values, 'Fullname')} type='onSumit' /> },
      filterIcon: () => {
        return <SearchOutlined />
      }

    },
    {
      title: 'Apellidos',
      dataIndex: 'firstLastName',
      sorter: (a, b) => a.firstLastName - b.firstLastName,
      filterDropdown: () => { return <Input.Search placeholder='Search' onSearch={values => handleSearch(values, 'Fullname')} type='onSumit' /> },
      filterIcon: () => {
        return <SearchOutlined />
      }

    }, {
      title: 'Correo',
      dataIndex: 'email',
      sorter: (a, b) => a.name - b.name,
      filterDropdown: () => { return <Input.Search placeholder='Search' onSearch={values => handleSearch(values, 'Email')} type='onSumit' /> },
      filterIcon: () => {
        return <SearchOutlined />
      }

    },
    {
      title: 'Telefono',
      dataIndex: 'phoneNumber',
      sorter: (a, b) => a.trips - b.trips
    }
  ]

  const data = listCustomer?.paginatedData?.map(row => ({
    firstName: row.firstName,
    firstLastName: row.firstLastName,
    email: row.email,
    phoneNumber: row.phoneNumber

  }))

  return (
    <form>
      <div
        className='flex flex-col mt-12'
      >

        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={{ current: pageNumber, pageSize: itemsPerPage, onChange: handlePageChange, total: 12 }}

        />

      </div>

    </form>
  )
}
export default App
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
