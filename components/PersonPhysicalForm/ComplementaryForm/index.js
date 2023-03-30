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

  const onSubmitComplementaryForm = (data) => {
    postPersonPhysicalData(data, "/asdas");
    console.log(data);
  };

  const onSubmitPersonFormNext = () => {
    router.push("/customer/personal-form/references-data");
  };

  const onSubmitPersonFormBack = () => {
    router.push("/customer/personal-form/banks-data");
  };
  return (
    <div className="">
      <form className="mx-auto max-w-screen-md">
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Select
            className={styles.textbox}
            // onChange={handleGenders}
            register={register}
            name="genderId"
            // options={valuesGender?.data}
            emptyOptions="Productos y/o servicios que contratará "
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Origen de los recursos a operar"
            className={styles.textbox}
            name="fas"
            register={register}
            // error={errors?.phoneNumber?.message}
          />
          <Input
            type="text"
            placeholder="Destino de los recursos a operar"
            className={styles.textbox}
            name="birthDate"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Monto de operación(estimado mensual)"
            className={styles.textbox}
            name="Monto de operación (estimado mensual)"
            register={register}
            // error={errors?.phoneNumber?.message}
          />
        </div>
        <div className="flex flex-col w-full mb-3 gap-3 sm:flex-row">
          <Input
            type="text"
            placeholder="Número de operaciones(estimado mensual)"
            className={styles.textbox}
            name="asd"
            register={register}

            // error={errors?.birthDate?.message}
          />
        </div>
        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            {" "}
            Frecuencia transaccional (estimado mensual).
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode1"
              register={register}
              value="Baja"
            >
              {" "}
              <label>Baja.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode1"
              register={register}
              value="Media"
            >
              {" "}
              <label>Media.</label>
            </Radiobutton>
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode1"
              register={register}
              value="Alta"
            >
              {" "}
              <label>Alta.</label>
            </Radiobutton>
          </div>
        </div>

        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            ¿Realizará pagos en efectivo?.
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode3"
              register={register}
              value="Si"
            >
              {" "}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode3"
              register={register}
              value="No"
            >
              {" "}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label>
            En caso de utilizar dinero en efectivo, favor de especificar motivo
            y monto estimado mensual.
          </label>
          <Input
            type="text"
            placeholder="Detalle en este campo lo anteriormente expuesto."
            className={styles.textbox}
            name="asd"
            register={register}
          />
        </div>

        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            ¿Desempeña actualmente o desempeñó durante el año inmediato algún
            cargo público a nivel federal, estatal, municipal o distrital en
            México o en algún país del extranjero?.
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode4"
              register={register}
              value="Si"
            >
              {" "}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode4"
              register={register}
              value="No"
            >
              {" "}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label className="text-gray italic">
            En caso positivo, se debe anexar un documento diligenciado el cual
            sera proporcionado por uno de nuestros asesores posteriormente
          </label>
        </div>

        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            ¿Su cónyuge o algún pariente por consanguinidad o afinidad hasta el
            segundo grado del apoderado legal desempeña actualmente o desempeñó
            durante el año inmediato anterior algún cargo público a nivel
            federal, estatal o municipal en México o en algún país extranjero?
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode5"
              register={register}
              value="Si"
            >
              {" "}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode5"
              register={register}
              value="No"
            >
              {" "}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label className="text-gray italic">
            En caso positivo, se debe anexar un documento diligenciado el cual
            sera proporcionado por uno de nuestros asesores posteriormente.
          </label>
        </div>
        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            ¿Algún tercero obtendrá los beneficios derivados de las operaciones
            realizadas con TIGRIADA, S.A.P.I. de C.V., SOFOM, E.N.R. y ejerza
            los derechos de uso, aprovechamiento o disposición de los recursos
            operados, siendo el verdadero propietario de los mismos?
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode6"
              register={register}
              value="Si"
            >
              {" "}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode6"
              register={register}
              value="No"
            >
              {" "}
              <label>No.</label>
            </Radiobutton>
          </div>
          <label className="text-gray italic">
            En caso positivo, especificar el nombre de la persona física o moral
            y llenar el "Formato de Identificación de Propietarios Reales"
          </label>
          <Input
            type="text"
            placeholder="Detalle en este campo lo anteriormente expuesto."
            className={styles.textbox}
            name="asd"
            register={register}
          />
        </div>
        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            ¿Algún tercero aportará regularmente recursos para el cumplimiento
            de las obligaciones derivadas del contrato que se establezca con
            TIGRIADA, S.A.P.I. de C.V., SOFOM, E.N.R., sin ser el titular de
            dicho contrato ni obtener los beneficios económicos derivados del
            mismo?
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode"
              register={register}
              value="Si"
            >
              {" "}
              <label>Si.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode"
              register={register}
              value="No"
            >
              {" "}
              <label>No.</label>
            </Radiobutton>
          </div>
          <div>
            <label className="text-gray italic">
              En caso positivo, especificar el nombre de la persona física o
              moral y llenar el "Formato de Identificación de Proveedores de
              Recursos"
            </label>
          </div>
          <Input
            type="text"
            placeholder="Detalle en este campo lo anteriormente expuesto."
            className={styles.textbox}
            name="asd"
            register={register}
          />
        </div>

        <div className="mb-3 bg-white">
          <label className="flex justify-center my-3">
            Declaro que la información y documentación presentadas son
            verdaderas, que actúo por cuenta propia y que el origen de mis
            recursos es lícito.
          </label>
          <div className="flex justify-around">
            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode"
              register={register}
              value="De acuerdo."
            >
              {" "}
              <label>De acuerdo.</label>
            </Radiobutton>

            <Radiobutton
              type="radio"
              id="hasAgreementCode"
              name="hasAgreementCode"
              register={register}
              value="No estoy de acuerdo."
            >
              {" "}
              <label>No estoy de acuerdo.</label>
            </Radiobutton>
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
            onClick={handleSubmit(onSubmitComplementaryForm)}
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
