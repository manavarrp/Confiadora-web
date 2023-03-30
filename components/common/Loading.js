import Logo from './Logo'

const Loading = () => {
  return (
    <>
      <div className='md:w-[600px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center'>
        <div className='title flex flex-col items-center'>
          <Logo />
        </div>
        <p>
          Estamos procesando tu solicitud, por favor espera un momento mientras carga tu petición.
        </p>
      </div>

    </>
  )
}

export default Loading
