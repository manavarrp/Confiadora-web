
const PhysicalPersonForm = ({ activeStep = 0 }) => {
  return (
    <div className='mb-5 flex flex-wrap p-3'>
      {[
        'Datos Personales',
        'Dirección',
        'Datos laborales',
        'Datos Bancarios',
        'Datos Adicionales',
        'Referencias Personales',
        'Confirmar'
      ].map((step, index) => (
        <div
          key={step}
          className={`flex-1 border-b-2 text-center ${
            index <= activeStep
              ? 'border-darkBlue text-darkBlue'
              : 'border-gray text-gray'
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  )
}

export default PhysicalPersonForm
