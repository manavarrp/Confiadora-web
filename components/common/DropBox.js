
import { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import usePostChargeDataMassive from '../../hooks/usePostChargeDataMassive'
import { toast } from 'react-toastify'
import Loading from '../common/Loading'

const DropBoxError = ({ errors, resetFileData }) => {
  return (
    <>
      <div className='flex justify-evenly mb-2'>
        <button className='bg-red text-white rounded-md p-1 shadow-lg' type='button' onClick={resetFileData}>ELiminar archivo</button>
      </div>
      <table className='min-w-full'>
        <thead className='border-b bg-darkBlue shadow-lg'>
          <tr>
            <th className='px-5 text-left text-white'>Fila</th>
            <th className='p-5 text-left text-white'>Descripción</th>
          </tr>
        </thead>
        <tbody>

          {errors.map(error => (
            <tr className='border-b' key={error.name}>
              <td className=' p-5 '>{error.Field}:</td>
              <td className=' p-5 '> {error.Message}</td>
            </tr>

          ))}

        </tbody>
      </table>
      <div className='flex justify-evenly mt-2'>
        <button className='bg-red text-white rounded-md p-1 shadow-lg' type='button' onClick={resetFileData}>ELiminar archivo</button>
      </div>

    </>
  )
}

const DropBoxInitialState = ({ isDragActive, getRootProps, getInputProps, style }) => {
  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <div className='flex flex-col items-center justify-center gap-4'>
        <ArrowUpTrayIcon className='w-5 h-5 fill-current' />
        {isDragActive
          ? (
            <p>Suelta los archivos aquí ...</p>
            )
          : (
            <p>Arrastre y suelte archivos aquí, o haga clic para seleccionar archivos</p>
            )}
      </div>
    </div>
  )
}

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const focusedStyle = {
  borderColor: '#2196f3'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

const Dropzone = () => {
  const { loading, postPostChargeData, errorForm, resetFileData } = usePostChargeDataMassive()
  console.log({ errorForm })
  const onDrop = useCallback(async (acceptedFiles) => {
    /*  // acceptedFiles={[".csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values"]}
    console.log({ acceptedFiles })
    const fileLength = acceptedFiles.length
    cc
    const [file] = acceptedFiles
    const formData = new FormData()

    formData.append('upload_preset', file)

    const response = await postPostChargeData(formData)

    console.log({ response })
    // setRejected(previousFiles => [...previousFiles, ...rejectedFiles]) */
    const fileLength = acceptedFiles.length
    if (fileLength === 0) return toast.info('Por favor seleccione 1 archivo valido')
    if (fileLength > 1) toast.info('Se tendra en cuenta el primer archivo seleccionado')
    const file = acceptedFiles[0]
    const formData = new FormData()
    formData.append('formFile', file)
    // console.log({ file })
    /*   const _axios = globalAxios()
    const result = await _axios({
      method: 'POST',
      url: '/customers/bulk-record',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }

    }) */
    console.info({ file })

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const response = await postPostChargeData(file)
=======
    const response = await postPostChargeData(formData)
>>>>>>> Stashed changes
=======
    const response = await postPostChargeData(formData)
>>>>>>> Stashed changes

    console.log({ response })
  }, [postPostChargeData])

  const {
    getRootProps, getInputProps, isDragActive, isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'text/csv',
    maxSize: 1024 * 1000,
    onDrop,
    maxFiles: 1
  })

  console.log({ isFocused, isDragAccept, isDragReject })
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ])

  return (

    <div>

      {loading && <Loading />}
      {!loading && Boolean(errorForm?.length) && <DropBoxError errors={errorForm} resetFileData={resetFileData} />}
      {!loading && !errorForm?.length && <DropBoxInitialState {...{ getRootProps, getInputProps, style, isDragActive }} />}

    </div>

  )
}

export default Dropzone
