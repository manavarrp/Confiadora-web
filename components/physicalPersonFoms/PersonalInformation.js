import React, { useEffect, useState } from "react";
import styles from "../../styles/Username.module.css";
import { useForm  } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import RegisterForm from "../registerForms";
import Logo from "../common/logo";
import { schema } from "../../validators/schema";



const PersonalInformation = () => {
 
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
  
  } = useForm({
    defaultValues: {
    },
    //resolver: yupResolver(schema),
  });



  //console.log(formData);

  

  const handleIdentificationTypes = (event) => {
    const getId = event.target.value;
    setGetId(getId);
    resetField("identificationNumber");

    //getValues(getId);
  };

  const submitFormCurp = async (data) => {
    //console.log(data);
    data.email = data.email.toLowerCase();
    GetCurpCalculation(data).then((data) =>
      setValue("identificationNumber", data)
    );
  };


  return (
    <div className="md:w-[500px] shadow-sm shadow-gray bg-white w-[320px] mx-auto px-7 py-4 rounded-xl mt-8 items-center">
      <div className="title flex flex-col items-center">
        <Logo />
        <span className=" text-center text-gray ml-6">
          Credito al alcance de todos
        </span>
      </div>
     
        <form className="py-1" onSubmit={handleSubmit(submitFormCurp)}>

          <div className="items-center">
            <div>
           
            </div>
            <div className="w-full gap-1">
              <div className="mb-3">
                {" "}
              
              </div>
              <div className="mb-3">
                {" "}
              
              </div>
            </div>
        
        
        
          </div>
          <div className=" flex justify-center mt-3">
            <button type="submit" className={styles.btn} disabled={isLoading}>
              {isLoading ? "cargando" : "Siguiente"}
            </button>
          </div>
        </form>
    

    </div>
  );
};

export default PersonalInformation;
