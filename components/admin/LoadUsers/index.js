<<<<<<< Updated upstream
import { useState } from 'react'
=======
>>>>>>> Stashed changes
import Modal from '../../common/Modal'
import FormUsers from './FormUsers'
import HeaderPagesDashboard from '../../common/HeaderPagesDashboard'
import { UsersIcon } from '@heroicons/react/20/solid'
<<<<<<< Updated upstream
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
=======
import { Table, Input } from 'antd'
import { useEffect, useState } from 'react'
import usePostListCustomCustomer from '../../../hooks/usePostListCustomCustomer'
import { SearchOutlined } from '@ant-design/icons'
import { transformDataProfileFullName } from '../../../utils/transformBackData'

const LoadUser = () => {
  const [open, setOpen] = useState(null)
  const [filters, setFilters] = useState({
    pageNumber: 1,
    itemsPerPage: 5,
    filters: []
  })
  const { loading, postListCustomCustomer, listCustomer } = usePostListCustomCustomer()

  useEffect(() => {
    postListCustomCustomer(filters)
    console.log({ query: filters.filters })
  }, [postListCustomCustomer, filters])

  const handlePageChange = (current, pageSize) => {
    setFilters((prevState) => ({
      ...prevState,
      pageNumber: current,
      itemsPerPages: pageSize
    }))
  }

  // console.log({ pageNumber, itemsPerPage })

  function handleSearch (value, columnName) {
    let prevFilters = [...filters.filters]
    const index = prevFilters.findIndex((q) => q.columnName === columnName)
    // console.log({ prevFilters, index })
    if (index !== -1 && value) {
      prevFilters[index] = {
        columnName,
        value
      }
    }
    if (index !== -1 && !value) {
      prevFilters = prevFilters.filter((q) => q.columnName !== columnName)
    }
    if (index === -1) {
      prevFilters = [...prevFilters, { value, columnName }]
    }
    setFilters((prevState) => ({
      ...prevState,
      pageNumber: 1,
      filters: prevFilters
    }))

    // console.log({ columnName, value })
  }

  const columns = [
    {
      title: 'ID',
      render: (_, record, index) => index + 1

    },

    {
      title: 'Nombre Completo',
      dataIndex: 'fullName',
      sorter: (a, b) => a.fullName < b.fullNames,
      filterDropdown: () => { return <Input.Search placeholder='Search' onSearch={values => handleSearch(values, 'Fullname')} type='onSumit' /> },
      filterIcon: () => {
        return <SearchOutlined />
      }

    },
    {
      title: 'Correo',
      dataIndex: 'email',
      sorter: (a, b) => a.name < b.name,
      filterDropdown: () => { return <Input.Search placeholder='Search' onSearch={values => handleSearch(values, 'Email')} type='onSumit' /> },
      filterIcon: () => {
        return <SearchOutlined />
      }

    },
    {
      title: 'Telefono',
      dataIndex: 'phoneNumber'
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones'
    }
  ]

  const data = listCustomer?.paginatedData?.map(row => ({
    fullName: transformDataProfileFullName(row).fullName,
    email: row.email,
    phoneNumber: row.phoneNumber,
    acciones:
  <button
    key={row.id}
    type='button'
    className=' border bg-darkBlue w-1/2 h-10 rounded-lg text-white text-xl shadow-lg text-center'
    onClick={() => setOpen(row)}
  >
    Editar
  </button>

  }))
>>>>>>> Stashed changes

  return (
    <>
      <HeaderPagesDashboard icon={<UsersIcon className='h-10 w-10' color='#477EFA' />} title='Lista de Usuarios' />
      <div className='bg-white h-auto shadow-sm mt-4'>
<<<<<<< Updated upstream
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
=======

        <form>

          <div
            className='flex flex-col mt-12'
          >
            <Table
              loading={loading}
              columns={columns}
              dataSource={data}
              pagination={{ defaultCurrent: filters.pageNumber, defaultPageSize: filters.itemsPerPage, onChange: handlePageChange, total: listCustomer?.recordsFiltered || 0, pageSizeOptions: [5, 10, 20] }}
            />

          </div>

        </form>
        <Modal open={Boolean(open)} setOpen={() => setOpen(null)}>
          <FormUsers users={open} close={() => setOpen(null)} />
        </Modal>

>>>>>>> Stashed changes
      </div>
    </>
  )
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export default LoadUser
