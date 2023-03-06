import React, { useEffect, useState } from "react";
import styles from "../../styles/Username.module.css";
import avatar from "../../public/profile.png";
import Image from "next/image";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { curpCalculation, registerUser } from "../../featuress/auth/authSlice";
import globalAxios from "../../axios/index";
import States from "../Catalgues/states/States";
import useGetIdentificationType from "../../hooks/useGetIdentificationType";
import Gender from "../Catalgues/gender/Gender";
import Link from "next/link";
import RegisterForm from "../registerForms";
import Logo from "../../common/logo";
import { schema } from "../../validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const idTypes = useGetIdentificationType();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const {
    register,
    getValues,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
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
    },
    resolver: yupResolver(schema),
  });
  const { register: register2, handleSubmit: handleSubmit2 } = useForm({
    mode: "onChange",
    defaultValues: {
      identificationNumber: "",
    },
  });

  //console.log(formData);

  const [getIdIden, setGetId] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const identiTypes = idTypes.data;

  const handleIdentificationTypes = (event) => {
    const getId = event.target.value;
    setGetId(getId);
    resetField("identificationNumber");

    //getValues(getId);
  };

  const submitFormCurp = async (data) => {
    //console.log(data);
    data.email = data.email.toLowerCase();
    const callback = ({ data }) => setValue("identificationNumber", data);

    dispatch(curpCalculation({ userData: data, callback }));

    //console.info(JSON.stringify(data));
    //console.log(message)

    //resetField("identificationNumber");
    // console.log(data);
  };

  // const result = message;
  //console.log(formData);

  //console.log(message.data);
  const submitFormRegister = async (data) => {
    const values = getValues();
    //console.log(values);

    dispatch(registerUser({ ...data, ...values }));

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
      <FormProvider {...{ register, getValues }}>
        <form className="py-1" onSubmit={handleSubmit(submitFormCurp)}>
          {/*  <div className="profile flex justify-center py-4">
                <label htmlFor="profile">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className={styles.profile_img}
                  />
                </label>
               
              </div> */}

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
              {/*           <Select
                    className={styles.textbox}
                    onChange={handleIdentificationTypes}
                    options={idTypes?.data}
                    emptyOptions='Selecciona tu documento'
                    name='curp'
                    register={register}
                  /> */}
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
              <div className="name flex flex-col w-3/4 gap-6 ">
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className={styles.btn}
                    disabled={isLoading}
                  >
                    {isLoading ? "cargando" : "Calcula Curp"}
                  </button>
                </div>
                <label className="w-full">
                  Por favor valida si tu CURP es correcto:{" "}
                </label>
                <input
                  className="visibility: hidden"
                  value="08db0949-ff0f-42f1-8a22-e6787570f3da"
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
                  value="08db0949-ff18-4dc9-87c2-23d43aaa271b"
                  {...register("identificationTypeId")}
                />
                <input
                  className={styles.textbox}
                  {...register("identificationNumber")}
                />
              </div>
            )}
          </div>
        </form>
        <form key={2} onSubmit={handleSubmit2(submitFormRegister)}>
          {" "}
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <input
                type="checkbox"
                defaultChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                {...register2("hasAgreementCode")}
              />
              <label>¿Tienes convenio con tu empresa?</label>
              <div>
                {isChecked ? (
                  <input
                    placeholder="ingresa tu codigo"
                    {...register2("agreementCode")}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <input type="checkbox" id="termins" />
              <label htmlFor="agree">
                <Link href={"/termin"}>Términos y condiciones</Link>
              </label>
            </div>
            <div className="flex  mt-3 ml-32">
              <input type="checkbox" id="privacy" />
              <label htmlFor="agree">
                <Link href={"/termin"}>Aviso de privacidad</Link>
              </label>
            </div>
          </div>
          <div className=" flex justify-center mt-3">
            <button type="submit" className={styles.btn} disabled={isLoading}>
              {isLoading ? "cargando" : "Registrate"}
            </button>
          </div>
        </form>
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
