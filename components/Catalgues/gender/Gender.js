import React, { useEffect, useState } from "react";
import styles from "../../../styles/Username.module.css";
import { useFormContext } from "react-hook-form";
import useGetGender from "../../../hooks/useGetGender";
import Select from "../../common/select";

const Gender = () => {
  const valuesGender = useGetGender();

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleGenders = (event) => {
    const getId = event.target.value;
    // console.log(getId);
    getValues(getId);
  };

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleGenders}
        register={register}
        name="genderId"
        options={valuesGender?.data}
        emptyOptions="Sexo"
        error={errors?.genderId?.message}
      />
    </div>
  );
};

export default Gender;
