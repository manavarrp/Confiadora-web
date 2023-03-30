import styles from "../../../../styles/Username.module.css";
import { useFormContext } from "react-hook-form";
import Select from "../../../common/Select";
import useGetMunicipality from "../../../hooks/useGetMunicipilaty";

const Municipality = () => {
  const valuesMunicipality = useGetMunicipality();

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleMunicipality = (event) => {
    const getId = event.target.value;
    // console.log(getId);
    getValues(getId);
  };

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleMunicipality}
        register={register}
        name="genderId"
        options={valuesMunicipality?.data}
        emptyOptions="Sexo"
        error={errors?.genderId?.message}
      />
    </div>
  );
};

export default Municipality;
