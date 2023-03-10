import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Username.module.css";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authSlice";
import States from "../Catalgues/states/States";
import useGetIdentificationType from "../../hooks/useGetIdentificationType";
import Gender from "../Catalgues/gender/Gender";
import Link from "next/link";
import RegisterForm from "../registerForms";
import Logo from "../common/logo";
import useGetCurpCalculation from "../../hooks/useGetCurpCalculation";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/formSchema/registerSchema";

const Register = () => {
  const identificationTypeRef = useRef();
  const idTypes = useGetIdentificationType();
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      firstLastName: "",
      secondLastName: "",
      email: "",
      phoneNumber: "",
      birthDate: "",
      identificationNumber: "",
      genderId: "",
      stateId: "",
      hasAgreementCode: false,
      agreementCode: "",
      //terminsConditions: "",
      //privacity: "",
    },
    //resolver: yupResolver(registerSchema),
  });

  const { register, handleSubmit, resetField, setValue } = methods;

  const GetCurpCalculation = useGetCurpCalculation();
  //console.log(formData);

  const [getIdIden, setGetId] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const identiTypes = idTypes.data;

  const handleIdentificationTypes = (event) => {
    const getId = event.target.value;
    setGetId(getId);
    resetField("identificationNumber");
    console.log(identificationTypeRef.current);

    //getValues(getId);
  };

  const submitFormCurp = async (data) => {
    //console.log(data);
    const payload = {
      firstName: data.firstName,
      secondName: data.secondName,
      firstLastName: data.firstLastName,
      secondLastName: data.secondLastName,
      stateId: data.stateId,
      birthDate: data.birthDate,
      genderId: data.genderId,
    };
    data.email = data.email.toLowerCase();
    GetCurpCalculation(payload).then((data) =>
      setValue("identificationNumber", data)
    );
  };

  // const result = message;
  //console.log(formData);

  //console.log(message.data);
  const submitFormRegister = async (data) => {
    //console.log(values);

    dispatch(registerUser(data));

    //console.info(JSON.stringify(data));
  };
  return (
    <div className="md:w-[500px] shadow-sm shadow-gray bg-white w-[320px] mx-auto px-7 py-4 rounded-xl mt-8 items-center">
      <div className="title flex flex-col items-center">
        <Logo />
        <span className=" text-center text-gray ml-6">
          Credito al alcance de todos
        </span>
      </div>
      <FormProvider {...methods}>
        <form className="py-1" ref={identificationTypeRef}>
          <div className="items-center">
            <div>
              <RegisterForm />
            </div>
            <div className="w-full gap-1">
              <div className="mb-3">
                {" "}
                <Gender />
              </div>
              <div className="mb-3">
                {" "}
                <States />
              </div>
            </div>
            <div className="flex  w-full gap-6 mb-3">
              <select
                className={styles.textbox}
                onChange={(e) => handleIdentificationTypes(e)}
              >
                <option value="">Tipo de documento</option>
                {identiTypes &&
                  identiTypes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            {getIdIden === "08db0949-ff0f-42f1-8a22-e6787570f3da" && (
              <div className="flex flex-col justify-center w-full gap-6 ">
                <div className="flex items-center">
                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={isLoading}
                    onClick={handleSubmit(submitFormCurp)}
                  >
                    {isLoading ? "cargando" : "Calcula Curp"}
                  </button>
                </div>
                <label className="w-full">
                  Por favor valida si tu CURP es correcto:{" "}
                </label>
                <input
                  className="visibility: hidden"
                  value={getIdIden}
                  {...register("identificationTypeId")}
                />
                <input
                  className={styles.textbox}
                  {...register("identificationNumber")}
                  readOnly
                />
              </div>
            )}
            {getIdIden === "08db0949-ff18-4dc9-87c2-23d43aaa271b" && (
              <div className=" flex flex-col w-3/4 gap-6 ">
                <label className="w-full">
                  Por favor ingresa tu numero de extranjeria
                </label>
                <input
                  className="visibility: hidden"
                  value={getIdIden}
                  {...register("identificationTypeId")}
                />
                <input
                  className={styles.textbox}
                  {...register("identificationNumber")}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <input
                type="checkbox"
                defaultChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                {...register("hasAgreementCode")}
              />
              <label>¿Tienes convenio con tu empresa?</label>
              <div>
                {isChecked ? (
                  <input
                    placeholder="ingresa tu codigo"
                    {...register("agreementCode")}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <input
                type="checkbox"
                id="termins"
                {...register("terminsConditions")}
              />
              <label htmlFor="agree">
                <Link href={"/termin"}>Términos y condiciones</Link>
              </label>
            </div>
            <div className="flex  mt-3 ml-32">
              <input
                type="checkbox"
                id="privacy"
                // {...register("privacity")}
              />
              <label htmlFor="agree">
                <Link href={"/termin"}>Aviso de privacidad</Link>
              </label>
            </div>
          </div>
          <div className=" flex justify-center mt-3">
            <button
              type="submit"
              className={styles.btn}
              disabled={isLoading}
              onClick={handleSubmit(submitFormRegister)}
            >
              {isLoading ? "cargando" : "Registrate"}
            </button>
          </div>
        </form>{" "}
      </FormProvider>
      <div className="text-center py-2 text-gray">
        <span>
          ¿ Ya tienes cuenta ?
          <Link className="text-darkBlue" href="/login">
            {" "}
            Ingresa
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
