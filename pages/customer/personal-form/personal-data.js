import Header from '../../../components/PersonPhysicalForm/Header'
import PersonForm from '../../../components/PersonPhysicalForm/PersonForm'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import Loading from '../../../components/common/Loading'

const PersonData = () => {
  const { loading, personalData } = useGetPersonPhysical()
  // console.log(personalData, loading);
  return (
    <>
      <Header />
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
