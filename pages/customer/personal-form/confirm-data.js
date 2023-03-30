import PersonPhysicalForm from "../../../components/PersonPhysicalForm";
import CompleteForm from "../../../components/PersonPhysicalForm/CompleteForm";
import Header from "../../../components/PersonPhysicalForm/Header";

const CompletesForm = () => {
  return (
    <>
      <Header />
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
