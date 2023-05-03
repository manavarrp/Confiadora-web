import usePostChargeDataMassive from '../../../../hooks/usePostChargeDataMassive'

const DropBoxError = ({ errors }) => {
  const { errorForm } = usePostChargeDataMassive()
  return (
    <>
      <div className='overflow-x-auto items-center'>
        <table className='min-w-full'>
          <thead className='border-b bg-darkBlue'>
            <tr>
              <th className='px-5 text-left'>Fila</th>
              <th className='p-5 text-left'>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {
                  errorForm.map(error => (
                    <tr className='border-b' key={error.name}>
                      <td className=' p-5 '>{error.name}: {error.message}</td>
                    </tr>
                  ))
                }

          </tbody>
        </table>
      </div>

    </>
  )
}

export default DropBoxError
