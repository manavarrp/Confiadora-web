import PersonPhysicalForm from "../../../components/PersonPhysicalForm";
import Header from "../../../components/PersonPhysicalForm/Header";
import PersonReference from "../../../components/PersonPhysicalForm/PersonReference";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";

const PersonReferences = () => {
  const { loading, personalReference } = useGetPersonPhysical();
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded h-16 shadow-sm ">
          <PersonPhysicalForm activeStep={5} />
        </div>
        <div>
          {loading ? (
            <p>Cargando</p>
          ) : (
            <PersonReference initialValues={personalReference} />
          )}
        </div>
      </div>
    </>
  );
};

export default PersonReferences;
