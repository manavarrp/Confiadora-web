import Loading from '../../../components/common/Loading'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import BankForm from '../../../components/PersonPhysicalForm/BankForm'
import Header from '../../../components/PersonPhysicalForm/Header'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'

const BankData = () => {
  const { loading, personalReference } = useGetPersonPhysical()
  return (
    <>
      <Header />
      <div className='grid lg:grid-cols-1 gap-5 mt-16 '>
        <div className='bg-white rounded h-16 shadow-sm '>
          <PersonPhysicalForm activeStep={3} />
        </div>
        <div>
          {loading
            ? (
              <Loading />
              )
            : (
              <BankForm initialValues={personalReference} />
              )}
        </div>
      </div>
    </>
  )
}

export default BankData
