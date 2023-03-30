import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
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
  const router = useRouter();
  const { loading, postPersonPhysicalData } = usePostPersonPhysical();
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm({
    // resolver: yupResolver(loginSchema),
    defaultValues: initialValues || DEFAULT_VALUES,
  });

  const onSubmitBankForm = (data) => {
    const payload = {
      CountryBirthDate: data.CountryBirthDate,
      SecondaryPhoneNumber: data.SecondaryPhoneNumber,
    };
    postPersonPhysicalData(payload, "/asdasasdasd");
    console.log(data);
  };

  const onSubmitPersonFormNext = () => {
    router.push("/customer/personal-form/add-data");
  };

  const onSubmitPersonFormBack = () => {
    router.push("/customer/personal-form/work-data");
  };

  return (
    <div className="">
      <form className="mx-auto max-w-screen-md">
        <div className="w-full mb-3">
          <Input
            type="text"
            placeholder="Escribir datos bancarios (cuenta clabe)."
            className={styles.textbox}
            name="birthDate"
            register={register}
            // error={errors?.email?.message}
          />
        </div>
        <div className="w-full mb-3 bg-white">
          <label className="text-darkBlue">
            Adjuntar datos bancarios (estado de cuenta con cuenta clabe).
            (Referencia del banco).
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
            onClick={handleSubmit(onSubmitBankForm)}
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
