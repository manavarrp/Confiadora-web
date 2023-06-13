const Table = ({
  headers,
  data,
  ...props
}) => {
  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        {data.map((row) => (
          <tr key={row.id}>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{row.name}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{row.email}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{row.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
