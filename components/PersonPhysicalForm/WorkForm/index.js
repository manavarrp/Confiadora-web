import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import usePostPersonPhysical from "../../../hooks/usePostPersonPhysical";
import styles from "../../../styles/Username.module.css";
import Input from "../../common/Input";
import { Radiobutton } from "../../common/Radiobutton";
import Select from "../../common/Select";

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

  /*   const onSubmitWorkForm = ({ adjnu1, adjnu2, ...data }) => {
    const payload = new FormData()
    payload.append('adjnu1', adjnu1)
    payload.append('adjnu2', adjnu2)
    Object.entries(data).forEach((key, value) => {
      payload.append(key, value)
    })

    postPersonPhysicalData(payload)
    console.log(data)
  } */

  const onSubmitWorkForm = (data) => {
    postPersonPhysicalData(data);
    console.log(data);
  };

  const onSubmitPersonFormNext = () => {
    router.push("/customer/personal-form/banks-data");
  };

  const onSubmitPersonFormBack = () => {
    router.push("/customer/personal-form/address-data");
  };
  return (
    <div className="">
      <form className="mx-auto max-w-screen-md">
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Nombre de la Institución en la que labora."
            className={styles.textbox}
            name="firstName"
            register={register}
          />
        </div>

        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Puesto/Profesión"
            className={styles.textbox}
            name="firstLastName"
            register={register}
          />
        </div>

        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Select
            className={styles.textbox}
            // onChange={handleGenders}
            register={register}
            name="genderId"
            // options={valuesGender?.data}
            emptyOptions="Actividad Económica/Giro Empresarial"
          />
        </div>
        <div className="mb-3 bg-white  items-center">
          <label className="flex justify-center my-3">
            {" "}
            Tiempo laborando (antigüedad).
          </label>
          <div className="pl-0">
            <div className="ml-3">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode"
                register={register}
                value="Menos de 6 meses."
                className=""
              >
                {" "}
                <label>Menos de 6 meses.</label>
              </Radiobutton>
            </div>
            <div className="ml-9">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode"
                register={register}
                value="entre  6 meses < 1 Año."
              >
                {" "}
                <label>entre 6 meses {"<"} 1 Año.</label>
              </Radiobutton>
            </div>
            <div className="mr-24">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode"
                register={register}
                value="1 Año."
              >
                {" "}
                <label>1 Año.{"      "}</label>
              </Radiobutton>
            </div>
            <div className="mr-4">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode"
                register={register}
                value=" Más de un año."
              >
                {" "}
                <label>Más de un año.</label>
              </Radiobutton>
            </div>
          </div>
        </div>
        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            {" "}
            Ingreso mensual promedio.
          </label>
          <div className="flex flex-col">
            <div className="mr-3">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode1"
                register={register}
                value="De $5,000 a $10,000"
              >
                {" "}
                <label>De $5,000 a $10,000</label>
              </Radiobutton>
            </div>
            <div className="mr-2">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode1"
                register={register}
                value="De $11,000 a $20,000"
              >
                {" "}
                <label>De $11,000 a $20,000</label>
              </Radiobutton>
            </div>
            <div className="m-auto">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode1"
                register={register}
                value="De $21,000 a $30,000"
              >
                {" "}
                <label>De $21,000 a $30,000</label>
              </Radiobutton>
            </div>
            <div className="m-auto">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode1"
                register={register}
                value="De $31,000 a $40,000"
              >
                {" "}
                <label>De $31,000 a $40,000</label>
              </Radiobutton>
            </div>
            <div className="ml-5">
              <Radiobutton
                type="radio"
                id="hasAgreementCode"
                name="hasAgreementCode1"
                register={register}
                value="De $41,000 en adelante"
              >
                {" "}
                <label>De $41,000 en adelante</label>
              </Radiobutton>
            </div>
          </div>
        </div>
        <div className="w-full mb-3 bg-white">
          <label className="text-darkBlue">
            Adjuntar talonarios de pago 3 últimos.
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
        <div className="w-full mb-3 bg-white">
          <label className="text-darkBlue">Adjuntar Referencia laboral.</label>
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
            onClick={handleSubmit(onSubmitWorkForm)}
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
