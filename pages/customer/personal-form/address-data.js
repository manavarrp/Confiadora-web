import PersonPhysicalForm from "../../../components/PersonPhysicalForm";
import AddressForm from "../../../components/PersonPhysicalForm/AddressForm";
import Header from "../../../components/PersonPhysicalForm/Header";
import useGetPersonPhysical from "../../../hooks/useGetPersonPhysical";

const AddressData = () => {
  const { loading, addressInfotmation } = useGetPersonPhysical();
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-1 gap-5 mt-16 ">
        <div className="bg-white rounded shadow-sm h-16">
          <PersonPhysicalForm activeStep={1} />
        </div>
        <div>
          {loading ? (
            <p>Cargando</p>
          ) : (
            <AddressForm initialValues={addressInfotmation} />
          )}
        </div>
      </div>
    </>
  );
};

export default AddressData;
