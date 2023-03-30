import Loading from '../../../components/common/Loading'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import Header from '../../../components/PersonPhysicalForm/Header'
import WorkForm from '../../../components/PersonPhysicalForm/WorkForm'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'

const WorkData = () => {
  const { loading, workingInformation } = useGetPersonPhysical()
  return (
    <>
      <Header />
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
              <WorkForm initialValues={workingInformation} />
              )}
        </div>
      </div>
    </>
  )
}

export default WorkData
