import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Username.module.css";
import { useFormContext } from "react-hook-form";

import useGetState from "../../../hooks/useGetState";
import Select from "../../../common/select";

const States = () => {
  const valuesStates = useGetState();
  const { register, getValues } = useFormContext();

  const handleMunipality = (event) => {
    const getId = event.target.value;
    //console.log(getId);
    getValues(getId);
  };

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleMunipality}
        register={register}
        options={valuesStates?.data}
        emptyOptions="Estado de nacimiento"
        name="stateId"
      />
    </div>
  );
};

export default States;
