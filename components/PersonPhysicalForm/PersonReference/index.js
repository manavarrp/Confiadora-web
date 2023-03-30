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

  const onSubmitReferencesForm = (data) => {
    postPersonPhysicalData(data);
    console.log(data);
  };

  const onSubmitPersonFormNext = () => {
    router.push("/customer/personal-form/confirm-data");
  };

  const onSubmitPersonFormBack = () => {
    router.push("/customer/personal-form/add-data");
  };

  return (
    <div className="">
      <form className="mx-auto max-w-screen-md">
        <div>
          <h4 className="font-bold">Primera Referencia Personal</h4>
          <div className="w-full mb-3">
            <Input
              type="text"
              placeholder="Nombres Completos"
              className={styles.textbox}
              name="email"
              register={register}
            />
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <Input
              type="text"
              placeholder="Ocupación"
              className={styles.textbox}
              name="firstName"
              register={register}
            />
            <Input
              type="text"
              placeholder="Teléfono"
              className={styles.textbox}
              name="secondName"
              register={register}
            />
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <Input
              type="text"
              placeholder="Tiempo de conocerlo"
              className={styles.textbox}
              name="birthDate"
              register={register}
            />
            <Input
              type="text"
              placeholder="Relación"
              className={styles.textbox}
              name="secondLastName"
              register={register}
            />
          </div>
        </div>

        <div>
          <h4 className="font-bold">Segunda Referencia Personal</h4>
          <div className="w-full mb-3">
            <Input
              type="text"
              placeholder="Nombres Completos"
              className={styles.textbox}
              name="email"
              register={register}
            />
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <Input
              type="text"
              placeholder="Ocupación"
              className={styles.textbox}
              name="firstName"
              register={register}
            />
            <Input
              type="text"
              placeholder="Teléfono"
              className={styles.textbox}
              name="secondName"
              register={register}
            />
          </div>
          <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
            <Input
              type="text"
              placeholder="Tiempo de conocerlo"
              className={styles.textbox}
              name="birthDate"
              register={register}
            />
            <Input
              type="text"
              placeholder="Relación"
              className={styles.textbox}
              name="secondLastName"
              register={register}
            />
          </div>
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
            onClick={handleSubmit(onSubmitReferencesForm)}
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
