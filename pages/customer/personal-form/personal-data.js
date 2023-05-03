import HeaderPagesDashboard from '../../../components/common/HeaderPagesDashboard'
import PersonForm from '../../../components/PersonPhysicalForm/PersonForm'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import Loading from '../../../components/common/Loading'
import { NewspaperIcon } from '@heroicons/react/24/solid'

const PersonData = () => {
  const { loading, personalData } = useGetPersonPhysical()
  // //console.log(personalData, loading);
  return (
    <>
      <div className='flex justify-between '>
        <HeaderPagesDashboard icon={<NewspaperIcon className='h-10 w-10' color='#477EFA' />} title=' Formulario Persona Física' />
        {/* //<Image width={35} src={confiadora} alt='confiadora' /> */}
      </div>
      <div className='grid lg:grid-cols-1 gap-5 mt-10 '>
        <div className='bg-white rounded  shadow-sm h-16'>
          <PersonPhysicalForm activeStep={0} />
        </div>
        <div>
          {loading
            ? (
              <Loading />
              )
            : (
              <PersonForm initialValues={personalData} />
              )}
        </div>
      </div>
    </>
  )
}

export default PersonData
