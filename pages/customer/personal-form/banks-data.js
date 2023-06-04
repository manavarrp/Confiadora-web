<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { NewspaperIcon } from '@heroicons/react/24/solid'
import Loading from '../../../components/common/Loading'
import PersonPhysicalForm from '../../../components/PersonPhysicalForm'
import BankForm from '../../../components/PersonPhysicalForm/BankForm'
import HeaderPagesDashboard from '../../../components/common/HeaderPagesDashboard'
import useGetPersonPhysical from '../../../hooks/useGetPersonPhysical'

const BankData = () => {
  const { loading, bankingInformation } = useGetPersonPhysical()
  return (
    <>
      <HeaderPagesDashboard icon={<NewspaperIcon className='h-10 w-10' color='#477EFA' />} title=' Formulario Persona Física' />
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
              <BankForm initialValues={bankingInformation} />
              )}
=======
import { NewspaperIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/common/Loading";
import PersonPhysicalForm from "../../../components/customer/PersonPhysicalForm";
import BankForm from "../../../components/customer/PersonPhysicalForm/BankForm";
import HeaderPagesDashboard from "../../../components/common/HeaderPagesDashboard";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";

const BankData = () => {
  const { loading, bankingInformation } = useGetPersonPhysical();
  return (
    <>
      <HeaderPagesDashboard
        icon={<NewspaperIcon className="h-10 w-10" color="#477EFA" />}
        title=" Formulario Persona Física"
      />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded h-16 shadow-sm ">
          <PersonPhysicalForm activeStep={3} />
        </div>
        <div>
=======
import { NewspaperIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/common/Loading";
import PersonPhysicalForm from "../../../components/customer/PersonPhysicalForm";
import BankForm from "../../../components/customer/PersonPhysicalForm/BankForm";
import HeaderPagesDashboard from "../../../components/common/HeaderPagesDashboard";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";

const BankData = () => {
  const { loading, bankingInformation } = useGetPersonPhysical();
  return (
    <>
      <HeaderPagesDashboard
        icon={<NewspaperIcon className="h-10 w-10" color="#477EFA" />}
        title=" Formulario Persona Física"
      />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded h-16 shadow-sm ">
          <PersonPhysicalForm activeStep={3} />
        </div>
        <div>
>>>>>>> Stashed changes
          {loading ? (
            <Loading />
          ) : (
            <BankForm initialValues={bankingInformation} />
          )}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  );
};

export default BankData;
