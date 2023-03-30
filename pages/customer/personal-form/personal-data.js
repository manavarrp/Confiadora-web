import Header from "../../../components/PersonPhysicalForm/Header";
import PersonForm from "../../../components/PersonPhysicalForm/PersonForm";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";
import PersonPhysicalForm from "../../../components/PersonPhysicalForm";

const PersonData = () => {
  const { loading, personalInformation } = useGetPersonPhysical();
  //console.log(personalInformation, loading);
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-1 gap-5 mt-10 ">
        <div className="bg-white rounded  shadow-sm h-16">
          <PersonPhysicalForm activeStep={0} />
        </div>
        <div>
          {loading ? (
            <p>Cargando</p>
          ) : (
            <PersonForm initialValues={personalInformation} />
          )}
        </div>
      </div>
    </>
  );
};

export default PersonData;
