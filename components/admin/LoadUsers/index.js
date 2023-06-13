import Modal from '../../common/Modal'
import FormUsers from './FormUsers'
import HeaderPagesDashboard from '../../common/HeaderPagesDashboard'
import { UsersIcon } from '@heroicons/react/20/solid'
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

  return (
    <>
      <HeaderPagesDashboard icon={<UsersIcon className='h-10 w-10' color='#477EFA' />} title='Lista de Usuarios' />
      <div className='bg-white h-auto shadow-sm mt-4'>

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

      </div>
    </>
  )
}
export default LoadUser
