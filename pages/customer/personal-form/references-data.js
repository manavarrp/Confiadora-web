import { NewspaperIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/common/Loading";
import PersonPhysicalForm from "../../../components/customer/PersonPhysicalForm";
import HeaderPagesDashboard from "../../../components/common/HeaderPagesDashboard";
import PersonReference from "../../../components/customer/PersonPhysicalForm/PersonReference";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";

const PersonReferences = () => {
  const { loading, personalReferences } = useGetPersonPhysical();

  return (
    <>
      <HeaderPagesDashboard
        icon={<NewspaperIcon className="h-10 w-10" color="#477EFA" />}
        title=" Formulario Persona Física"
      />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded h-16 shadow-sm ">
          <PersonPhysicalForm activeStep={5} />
        </div>
        <div>
          {loading ? (
            <Loading />
          ) : (
            <PersonReference initialValues={personalReferences} />
          )}
        </div>
      </div>
    </>
  );
};

export default PersonReferences;
