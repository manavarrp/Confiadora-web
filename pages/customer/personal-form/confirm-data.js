import { NewspaperIcon } from "@heroicons/react/24/solid";
import PersonPhysicalForm from "../../../components/customer/PersonPhysicalForm";
import CompleteForm from "../../../components/customer/PersonPhysicalForm/CompleteForm";
import HeaderPagesDashboard from "../../../components/common/HeaderPagesDashboard";

const CompletesForm = () => {
  return (
    <>
      <HeaderPagesDashboard
        icon={<NewspaperIcon className="h-10 w-10" color="#477EFA" />}
        title=" Formulario Persona Física"
      />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded h-16 shadow-sm ">
          <PersonPhysicalForm activeStep={6} />
        </div>
        <div>
          <CompleteForm />
        </div>
      </div>
    </>
  );
};

export default CompletesForm;
