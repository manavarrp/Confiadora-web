import { useDropzone } from 'react-dropzone'

function DropBox ({ onDrop }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    onDrop,
    noClick: true,
    noKeyboard: true
  })

  const lists = acceptedFiles.map((list) => (
    <li key={list.path}>
      {list.path} - {list.size} bytes
    </li>
  ))

  return (
    <>
      {' '}
      <section className='dropbox'>
        <div
          className='dropbox'
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}
        >
          <input {...getInputProps()} />
          <p>Arrastra y suelta algunos archivos aquí</p>
          <button type='button' className='btn' onClick={open}>
            Haga clic para seleccionar el archivo
          </button>
        </div>
      </section>
      <aside>
        <h4>Lista</h4>
        <p>{lists}</p>
      </aside>
    </>
  )
}

export default DropBox
