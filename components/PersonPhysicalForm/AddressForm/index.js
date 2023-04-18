import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import usePostPersonPhysical from "../../../hooks/usePostPersonPhysical";
import styles from "../../../styles/Username.module.css";
import Input from "../../common/Input";
import useGetMunicipalityByID from "../../../hooks/useGetMunicipalityByID";
import States from "../../Catalogs/States";
import Neighborhood from "../../Catalogs/Neighborhood";
import Municipality from "../../Catalogs/Municipality";
import { useSession } from "next-auth/react";
import useGetState from "../../../hooks/useGetState";
import useGetCitiesById from "../../../hooks/useGetCitiesById";
import City from "../../Catalogs/City";
import useGetNeighborhoodById from "../../../hooks/useGetNeigborhoodById";
import ResidenceCountry from "../../Catalogs/ResidenceCountry";
import DomicileCountry from "../../Catalogs/DomicileCountry";
import { useSelector } from "react-redux";

const DEFAULT_VALUES = {
  residenceCountryId: "",
  domicileCountryId: "",
  domicileStateId: "",
  domicileMunicipalityId: "",
  domicileCityId: "",
  domicileNeighborhoodId: "",
  outerNumber: "",
  innerNumber: "",
  firstBetweenStreet: "",
  secondBetweenStreet: "",
  zipCode: "",
  id: "",
  residenceCountryName: "",
  domicileStateName: "",
  domicileMunicipalityName: "",
  domicileCityName: "",
  domicileNeighborhoodName: "",
};

function RegisterForms({ initialValues }) {
  // //console.log(initialValues)
  const { optionsMunicipality, GetDataMunicipality } = useGetMunicipalityByID();
  const { optionsCities, GetDataCities } = useGetCitiesById();
  const { optionsNeighborhood, GetDataNeighborhood } = useGetNeighborhoodById();
  const { customerId } = useSelector((state) => state.physicalPersonForm);

  const valuesStates = useGetState(initialValues?.states);
  const router = useRouter();
  // console.log(initialValues, 'valores incicilaes')

  const { data } = useSession();
  // //console.log(data)

  const { loading, postPersonPhysicalData } = usePostPersonPhysical();

  const methods = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: initialValues || DEFAULT_VALUES,
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    // formState: { errors }
  } = methods;

  const handleGetMunicipalities = (event) => {
    setValue("domicileStateId", event.target.value);
    GetDataMunicipality(event.target.value);

    // //console.log(event, 'handle mucni')
  };

  const values = getValues();

  // //console.log(values, 'valores')
  const handleGetCities = (event) => {
    setValue("domicileMunicipalityId", event.target.value);
    GetDataCities(event.target.value);
  };

  const handleGetNeighborhood = (event) => {
    setValue("domicileCityId", event.target.value);
    GetDataNeighborhood(event.target.value);
  };

  /*  const onSubmitAddressForm = (data) => {
    const payload = {

      residenceCountryId: data.residenceCountryId,
      domicileCountryId: data.domicileCountryId,
      domicileStateId: data.domicileStateId,
      domicileMunicipalityId: data.domicileMunicipalityId,
      domicileCityId: data.domicileCityId,
      domicileNeighborhoodId: data.domicileNeighborhoodId,
      outerNumber: data.outerNumber,
      innerNumber: data.innerNumber,
      firstBetweenStreet: data.firstBetweenStreet,
      secondBetweenStreet: data.secondBetweenStreet,
      zipCode: data.zipCode,
      customerId

    }
    postPersonPhysicalData(payload, 'natural-person/address-information')
    // //console.log(payload, 'payload')
    setId(data.id)
  } */

  // //console.log(id, 'id')
  const onSubmitAddressFormUpdate = (data) => {
    const payload = {
      residenceCountryId: data.residenceCountryId,
      domicileCountryId: data.domicileCountryId,
      domicileStateId: data.domicileStateId,
      domicileMunicipalityId: data.domicileMunicipalityId,
      domicileCityId: data.domicileCityId,
      domicileNeighborhoodId: data.domicileNeighborhoodId,
      outerNumber: data.outerNumber,
      innerNumber: data.innerNumber,
      firstBetweenStreet: data.firstBetweenStreet,
      secondBetweenStreet: data.secondBetweenStreet,
      zipCode: data.zipCode,
      customerId,
      id: data?.id,
    };

    postPersonPhysicalData(payload, "natural-person/address-information");
    //  //console.log(payload, 'payload')
  };

  const onSubmitPersonFormNext = () => {
    router.push("/customer/personal-form/work-data");
    // //console.log(value, 'vlaue')
  };

  const onSubmitPersonFormBack = () => {
    router.push("/customer/personal-form/personal-data");
  };

  return (
    <div className="">
      <FormProvider {...methods}>
        <form className="mx-auto max-w-screen-md">
          <div className="flex flex-col  mb-3 gap-3 sm:flex-row">
            <div className="">
              <label className="text-sm text-darkBlue ml-1">
                País de residencia*
              </label>
              <ResidenceCountry />
            </div>
            <div className="">
              <label className="text-sm text-darkBlue ml-1">
                País de domicilio*
              </label>
              <DomicileCountry />
            </div>
            <div className="w-full">
              <label className="text-sm text-darkBlue ml-1">
                Código Postal*
              </label>
              <Input
                type="text"
                placeholder="Código Postal"
                className={styles.textbox}
                name="zipCode"
                register={register}
              />
            </div>
          </div>
          <div className="flex flex-col  mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue ml-1">Estado*</label>
              <States
                onChange={handleGetMunicipalities}
                register={register}
                name="domicileStateId"
                options={valuesStates}
                emptyOptions="Estado"
                className={styles.textbox}
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue ml-1">Municipio*</label>
              <Municipality
                options={optionsMunicipality}
                onChange={handleGetCities}
                register={register}
                name="domicileMunicipalityId"
                // options={valuesStates?.data}
                emptyOptions="Municipio"
                className={styles.textbox}
                //  value='domicileMunicipalityName'
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue ml-1">Ciudad*</label>
              <City
                options={optionsCities}
                onChange={handleGetNeighborhood}
                register={register}
                name="domicileCityId"
                // options={valuesStates?.data}
                emptyOptions="Ciudad"
                className={styles.textbox}
                //     value='domicileCityName'
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue ml-1">Colonia*</label>
              <Neighborhood
                options={optionsNeighborhood}
                // onChange={handleGetNeighborhood}
                register={register}
                name="domicileNeighborhoodId"
                // options={valuesStates?.data}
                emptyOptions="Colonia"
                className={styles.textbox}
                //  value='domicileNeighborhoodName'
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/4">
              <label className="text-sm text-darkBlue">Número exterior*</label>
              <Input
                type="text"
                placeholder="Número exterior"
                className={styles.textbox}
                name="outerNumber"
                register={register}
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label className="text-sm text-darkBlue">Número interior*</label>
              <Input
                type="text"
                placeholder="Número interior"
                className={styles.textbox}
                name="innerNumber"
                register={register}
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label className="text-sm text-darkBlue">
                Primera entre calle
              </label>
              <Input
                type="text"
                placeholder="Entre calle 1"
                className={styles.textbox}
                name="firstBetweenStreet"
                register={register}
              />
            </div>
            <div className="flex flex-col w-1/4">
              <label className="text-sm text-darkBlue">
                Segunda entre calle
              </label>
              <Input
                type="text"
                placeholder="Entre calle 2"
                className={styles.textbox}
                name="secondBetweenStreet"
                register={register}
              />
            </div>
          </div>

          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row" />
          <div className="w-full mb-3 bg-white">
            <label className="text-darkBlue">
              Adjuntar comprobante domiciliario
            </label>
            <Input
              type="file"
              name="ine"
              register={register}
              className={styles.textbox}
            />
            <p
              className="ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              PNG, JPG ó PDF (MAX. 800x400px).
            </p>
          </div>
          <p
            className="ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            * Campos obligatorios
          </p>
          <div className="flex justify-between mt-5">
            <button
              type="submit"
              onClick={handleSubmit(onSubmitPersonFormBack)}
              className=" border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center"
            >
              Atras
            </button>
            {/*             {id === ''
              ? <button
                  type='submit'
                  onClick={handleSubmit(onSubmitAddressFormUpdate)}
                 // disabled={loading}
                  className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
                  text='Guardar'
                />

              : <button
                  type='submit'
                  onClick={handleSubmit(onSubmitAddressForm)}
                 // disabled={loading}
                  className=' border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
                  text='Guardar'
                />} */}

            <button
              type="submit"
              onClick={handleSubmit(onSubmitAddressFormUpdate)}
              disabled={loading}
              className=" border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center"
            >
              {loading ? "cargando" : "Guardar"}
            </button>

            <button
              type="submit"
              onClick={handleSubmit(onSubmitPersonFormNext)}
              className=" border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center"
            >
              Siguiente
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default RegisterForms;
