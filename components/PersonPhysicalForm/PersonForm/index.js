import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import usePostPersonPhysical from "../../../hooks/usePostPersonPhysical";
import styles from "../../../styles/Username.module.css";
import Input from "../../common/Input";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Countrys from "../../Catalogs/Countrys";
import useGetNacionalityByID from "../../../hooks/useGetNacionalityByID";
import useGetCountry from "../../../hooks/useGetCountry";
import Country from "../../Catalogs/Country";

const DEFAULT_VALUES = {
  fullName: "",
  genderName: "",
  birthDate: "",
  phoneNumber: "",
  identificationNumber: "",
  identificationTypeName: "",
  email: "",
  birthCountryId: "",
  secondaryPhoneNumber: "",
  birthCountryName: "",
  birthStateName: "",
  fiel: "",
  nationality: "",
};

function RegisterForms({ initialValues }) {
  //console.log({ initialValues });
  const router = useRouter();

  const { customerId } = useSelector((state) => state.physicalPersonForm);

  const valuesStates = useGetCountry(initialValues?.countries);
  const { GetDataNaiconality, optionsNacionality } = useGetNacionalityByID();

  //const nacio = optionsNacionality.nacionality;
  // const [localDirtyData, setLocalDirtyData] = useState({})

  // const [isDirty, setIsDirty] = useState(false)
  // const [didSubmit, setDidSubmit] = useState(false)
  // console.log(customerId, 'estado qui')
  const methods = useForm({
    // resolver: yupResolver(loginSchema),

    defaultValues: initialValues || DEFAULT_VALUES,
  });
  const idTypes = useGetCountry();

  const {
    register,
    handleSubmit,
    setValue,
    // getValues,
    // formState: { errors }
  } = methods;

  const handleGetNacionality = (event) => {
    const e = event.target.value;
    setValue("id", event.target.value);
    GetDataNaiconality(event.target.value);

    //console.log({ e });
  };

  const { loading, postPersonPhysicalData } = usePostPersonPhysical();

  // const values = getValues();

  /*  const onBlurData = (event) => {
    //console.log(event.target.name)
    //console.log(event.target.value)
    const { name } = event.target
     //console.log(localDirtyData[name], value);
    if (localDirtyData[name] && localDirtyData[name] !== '') {
      toast.info('Nos ')
      alert('Has realizado cambios en el formulario, deseas salir sin guardar')
    }
  } */
  const [getIdIden, setGetId] = useState("");

  /*   const identiTypes = idTypes.data
  const handleCountry = (event) => {
    const getId = event.target.value
    setGetId(getId)

    // console.log(identificationTypeRef.current);

    // getValues(getId);
  } */

  const { data } = useSession();
  // const userId = data.user.sub;
  // console.log({ userId });
  // console.log(data)

  const onSubmitPersonForm = (data) => {
    const payload = {
      birthCountryId: data.birthCountryId,
      secondaryPhoneNumber: data.secondaryPhoneNumber,
      fiel: data.fiel,
      customerId,
    };
    postPersonPhysicalData(payload, "/natural-person/personal-data");

    // setIsDirty(false)
    // setDidSubmit(true)
    // console.log(payload, 'dara')
  };

  /*    useEffect(() => {
    if (!isDirty) setIsDirty(true)
    alert('Has realizado cambios en el formulario, deseas salir sin guardar')
  }, []) */

  const onClickNext = () => {
    // if (isDirty) return <Modal closeModal={closeModal} />
    router.push("/customer/personal-form/address-data");
    //console.log({ values });
  };

  return (
    <div className="">
      <FormProvider {...methods}>
        <form className="mx-auto max-w-screen-md">
          <div className="w-full mb-3">
            <label className="text-sm text-darkBlue">Nombre Completo</label>
            <Input
              type="text"
              placeholder="Nombres Completos"
              className={styles.textbox}
              name="fullName"
              register={register}
              // onBlurData={onBlurData}
              readOnly
            />
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue">Teléfono</label>
              <Input
                type="text"
                placeholder="Teléfono"
                className={styles.textbox}
                name="phoneNumber"
                register={register}
                readOnly
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue">
                Correo Electronico
              </label>
              <Input
                type="text"
                placeholder="Correo Electronico"
                className={styles.textbox}
                name="email"
                register={register}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue">
                Fecha de nacimiento
              </label>
              <Input
                type="text"
                placeholder="Fecha de nacimiento"
                className={styles.textbox}
                name="birthDate"
                register={register}
                readOnly
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue">
                Estado de Nacimiento
              </label>
              <Input
                type="text"
                placeholder="Estado de Nacimiento"
                className={styles.textbox}
                name="birthStateName"
                register={register}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue">Tipo de Documento</label>
              <Input
                type="text"
                placeholder="CURP"
                className={styles.textbox}
                name="identificationTypeName"
                register={register}
                // error={errors?.phoneNumber?.message}
                readOnly
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm text-darkBlue">
                Número de documento
              </label>
              <Input
                type="text"
                placeholder="RFC"
                className={styles.textbox}
                name="identificationNumber"
                register={register}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <div className="flex flex-col w-1/3">
              <label className="text-sm text-darkBlue">Sexo</label>
              <Input
                type="text"
                placeholder="Genero"
                className={styles.textbox}
                name="genderName"
                register={register}
                // error={errors?.phoneNumber?.message}
                readOnly
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label className="text-sm text-darkBlue">
                Teléfono Secundario
              </label>
              <Input
                type="text"
                placeholder="Teléfono Secundario"
                className={styles.textbox}
                name="secondaryPhoneNumber"
                register={register}
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label className="text-sm text-darkBlue ml-1">FIEL</label>
              <Input
                type="text"
                placeholder="fiel"
                className={styles.textbox}
                name="fiel"
                register={register}
              />
            </div>
          </div>

          <div className="flex flex-col  mb-3 gap-3 sm:flex-row">
            {/*      <Countrys
                onChange={handleGetNacionality}
                register={register}
                name='domicileStateId'
                options={valuesStates}
                emptyOptions='Estado'
                className={styles.textbox}
              />
            </div> */}

            <div className="flex flex-col w-full">
              <label className="text-sm text-darkBlue ml-1">
                País de Nacimiento
              </label>
              <Country />
            </div>

            {/*    <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
                <label className="text-sm text-darkBlue ml-1">
                  País de Nacimiento *
                </label>
                <Countrys
                  onChange={handleGetNacionality}
                  register={register}
                  name="birthCountryId"
                  options={valuesStates}
                  emptyOptions="País de Nacimiento"
                  className={styles.textbox}
                />
              </div>
              <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
                <label className="text-sm text-darkBlue ml-1">
                  Nacionalidad 12312
                </label>
                {optionsNacionality &&
                  optionsNacionality.map((data) => (
                    <Input
                      setValue={data}
                      name="nationality"
                      // options={valuesStates?.data}

                      className={styles.textbox}
                      //  value='domicileMunicipalityName'

                      type="text"
                      placeholder="Nacionalidad"
                      register={register}
                    />
                  ))}
              </div> */}

            {/*      <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>

           {/*  <div className='flex flex-col w-full mb-3'>
              <label className='text-sm text-darkBlue'>País de Nacimiento</label>
              <Country />

            </div> */}
          </div>

          <div className="w-full mb-3 bg-white">
            <label className="text-darkBlue">
              Adjuntar foto INE por ambos lados.
            </label>
            <Input
              type="file"
              className={styles.textbox}
              name="ine"
              register={register}
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
          <div className="flex justify-around mt-5">
            <button
              onClick={handleSubmit(onSubmitPersonForm)}
              disabled={loading}
              type="submit"
              className=" border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center"
            >
              {loading ? "cargando" : "Guardar"}
            </button>
            <button
              onClick={handleSubmit(onClickNext)}
              type="submit"
              className=" border bg-darkBlue w-full h-12 rounded-lg text-white text-xl shadow-sm text-center sm:w-1/4"
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
