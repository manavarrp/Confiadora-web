import Loading from '../../../components/common/Loading'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import ComplementaryForm from '../../../components/PersonPhysicalForm/ComplementaryForm'
import Header from '../../../components/PersonPhysicalForm/Header'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'

const AddressData = () => {
  const { loading, additionalInformation } = useGetPersonPhysical()
  return (
    <>
      <Header />
      <div className='grid lg:grid-cols-1 gap-5 mt-16 '>
        <div className='bg-white rounded shadow-sm h-16'>
          <PersonPhysicalForm activeStep={4} />
        </div>
        <div>
          {loading
            ? (
              <Loading />
              )
            : (
              <ComplementaryForm initialValues={additionalInformation} />
              )}
        </div>
      </div>
    </>
  )
}

export default AddressData
