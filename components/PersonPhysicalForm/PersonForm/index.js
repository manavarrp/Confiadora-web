import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import usePostPersonPhysical from "../../../hooks/usePostPersonPhysical";
import styles from "../../../styles/Username.module.css";
import Input from "../../common/Input";

const DEFAULT_VALUES = {
  fullName: "",
  genderName: "",
  birthDate: "",
  phoneNumber: "",
  identificationNumber: "",
  identificationTypeName: "",
  email: "",
};

function RegisterForms({ initialValues }) {
  console.log({ initialValues });
  const router = useRouter();
  const [localDirtyData, setLocalDirtyData] = useState({});

  // const [isDirty, setIsDirty] = useState(false)
  // const [didSubmit, setDidSubmit] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    // resolver: yupResolver(loginSchema),

    defaultValues: initialValues || DEFAULT_VALUES,
  });

  const { loading, postPersonPhysicalData } = usePostPersonPhysical();

  const onBlurData = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name } = event.target;
    // console.log(localDirtyData[name], value);
    if (localDirtyData[name] && localDirtyData[name] !== "") {
      toast.info("Nos ");
      alert("Has realizado cambios en el formulario, deseas salir sin guardar");
    }
  };

  const onSubmitPersonForm = (data) => {
    const payload = {
      CountryBirthDate: data.CountryBirthDate,
      SecondaryPhoneNumber: data.SecondaryPhoneNumber,
    };
    postPersonPhysicalData(payload, "/asdasasdasd");

    // setIsDirty(false)
    // setDidSubmit(true)
    console.log(payload, "dara");
  };

  /*    useEffect(() => {
    if (!isDirty) setIsDirty(true)
    alert('Has realizado cambios en el formulario, deseas salir sin guardar')
  }, []) */

  const onClickNext = () => {
    // if (isDirty) return <Modal closeModal={closeModal} />
    router.push("/customer/personal-form/address-data");
  };

  return (
    <div className="">
      <form className="mx-auto max-w-screen-md">
        <div className="w-full mb-3">
          <Input
            type="text"
            placeholder="Nombres Completos"
            className={styles.textbox}
            name="fullName"
            register={register}
            onBlurData={onBlurData}
            readonly
            // error={errors?.email?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Telefono"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            onBlurData={onBlurData}

            // error={errors?.firstName?.message}
          />
          <Input
            type="text"
            placeholder="Correo Electronico"
            className={styles.textbox}
            name="email"
            register={register}

            // error={errors?.secondName?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Fecha de nacimiento"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
          <Input
            type="text"
            placeholder="Estado de Nacimiento"
            className={styles.textbox}
            name="secondLastName"
            register={register}

            // error={errors?.secondLastName?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Genero"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="Telefono Secundario"
            className={styles.textbox}
            name="SecondaryPhoneNumber"
            register={register}
            onBlurData={onBlurData}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="CURP"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="RFC"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Nacionalidad"
            className={styles.textbox}
            name="phoneNumber"
            register={register}
            // error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="País de Nacimiento *"
            className={styles.textbox}
            name="CountryBirthDate"
            register={register}
            onBlurData={onBlurData}

            // error={errors?.birthDate?.message}
          />
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
            // error={errors?.email?.message}
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
    </div>
  );
}

export default RegisterForms;
