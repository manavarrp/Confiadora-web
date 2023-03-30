import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import usePostPersonPhysical from "../../../hooks/usePostPersonPhysical";
import styles from "../../../styles/Username.module.css";
import Input from "../../common/Input";
import Select from "../../common/Select";

const DEFAULT_VALUES = {
  fullName: "",
  genderName: "",
  secondName: "",
  birthDate: "",
  phoneNumber: "",
  identificationNumber: "",
  identificationTypeName: "",
  email: "",
};

function RegisterForms({ initialValues }) {
  const router = useRouter();
  console.log(initialValues);

  const { loading, postPersonPhysicalData } = usePostPersonPhysical();
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: initialValues || DEFAULT_VALUES,
  });

  const onSubmitAddressForm = (data) => {
    const payload = {
      CountryBirthDate: data.CountryBirthDate,
      SecondaryPhoneNumber: data.SecondaryPhoneNumber,
    };
    postPersonPhysicalData(payload, "/asdasasdasd");
    console.log(data);
  };

  const onSubmitPersonFormNext = () => {
    router.push("/customer/personal-form/work-data");
  };

  const onSubmitPersonFormBack = () => {
    router.push("/customer/personal-form/personal-data");
  };

  return (
    <div className="">
      <form className="mx-auto max-w-screen-md">
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Número exterior"
            className={styles.textbox}
            name="fullName"
            register={register}

            // error={errors?.firstName?.message}
          />
          <Input
            type="text"
            placeholder="Número interior"
            className={styles.textbox}
            name="secondName"
            register={register}

            // error={errors?.secondName?.message}
          />
          <Select
            className={styles.textbox}
            // onChange={handleGenders}
            register={register}
            name="genderId"
            // options={valuesGender?.data}
            emptyOptions="Colonia"
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Select
            className={styles.textbox}
            // onChange={handleGenders}
            register={register}
            name="genderId"
            // options={valuesGender?.data}
            emptyOptions="Alcaldía/Municipio"
          />
          <Select
            className={styles.textbox}
            // onChange={handleGenders}
            register={register}
            name="genderId"
            // options={valuesGender?.data}
            emptyOptions="Ciudad/Población"
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Select
            className={styles.textbox}
            // onChange={handleGenders}
            register={register}
            name="genderId"
            // options={valuesGender?.data}
            emptyOptions="Estado"
          />
          <Input
            type="text"
            placeholder="Código Postal"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="w-full mb-3 bg-white">
          <label className="text-darkBlue">
            Adjuntar comprobante domiciliario
          </label>
          <Input
            type="file"
            name="ine"
            register={register}
            className={styles.textbox}
            // error={errors?.email?.message}
          />
          <p
            className="ml-2 mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            PNG, JPG ó PDF (MAX. 800x400px).
          </p>
        </div>
        <div className="flex justify-between mt-5">
          <button
            type="submit"
            onClick={handleSubmit(onSubmitPersonFormBack)}
            className=" border bg-darkBlue w-1/4 h-12 rounded-lg text-white text-xl shadow-sm text-center"
          >
            Atras
          </button>
          <button
            type="submit"
            onClick={handleSubmit(onSubmitAddressForm)}
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
    </div>
  );
}

export default RegisterForms;
