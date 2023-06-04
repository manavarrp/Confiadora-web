<<<<<<< Updated upstream
import { NewspaperIcon } from '@heroicons/react/24/solid'
import Loading from '../../../components/common/Loading'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import ComplementaryForm from '../../../components/PersonPhysicalForm/ComplementaryForm'
import HeaderPagesDashboard from '../../../components/common/HeaderPagesDashboard'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'

const AddressData = () => {
  const { loading, additionalData } = useGetPersonPhysical()
  return (
    <>
      <HeaderPagesDashboard icon={<NewspaperIcon className='h-10 w-10' color='#477EFA' />} title=' Formulario Persona Física' />
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
              <ComplementaryForm initialValues={additionalData} />
              )}
=======
import { NewspaperIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/common/Loading";
import PersonPhysicalForm from "../../../components/customer/PersonPhysicalForm";
import ComplementaryForm from "../../../components/customer/PersonPhysicalForm/ComplementaryForm";
import HeaderPagesDashboard from "../../../components/common/HeaderPagesDashboard";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";

const AddressData = () => {
  const { loading, additionalData } = useGetPersonPhysical();
  return (
    <>
      <HeaderPagesDashboard
        icon={<NewspaperIcon className="h-10 w-10" color="#477EFA" />}
        title=" Formulario Persona Física"
      />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded shadow-sm h-16">
          <PersonPhysicalForm activeStep={4} />
        </div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <ComplementaryForm initialValues={additionalData} />
          )}
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  );
};

export default AddressData;
