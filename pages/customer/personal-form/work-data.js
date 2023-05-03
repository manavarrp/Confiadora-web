import { NewspaperIcon } from '@heroicons/react/24/solid'
import Loading from '../../../components/common/Loading'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import HeaderPagesDashboard from '../../../components/common/HeaderPagesDashboard'
import WorkForm from '../../../components/PersonPhysicalForm/WorkForm'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'

const WorkData = () => {
  const { loading, employmentInformation } = useGetPersonPhysical()
  return (
    <>
      <HeaderPagesDashboard icon={<NewspaperIcon className='h-10 w-10' color='#477EFA' />} title=' Formulario Persona Física' />
      <div className='grid lg:grid-cols-1 gap-5 mt-16 '>
        <div className='bg-white rounded h-16 shadow-sm '>
          <PersonPhysicalForm activeStep={2} />
        </div>
        <div>
          {loading
            ? (
              <Loading />
              )
            : (
              <WorkForm initialValues={employmentInformation} />
              )}
        </div>
      </div>
    </>
  )
}

export default WorkData
