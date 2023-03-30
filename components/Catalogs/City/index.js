import styles from "../../../../styles/Username.module.css";
import { useFormContext } from "react-hook-form";
import Select from "../../../common/Select";
import useGetCity from "../../../hooks/useGetCity";

const City = () => {
  const valuesCity = useGetCity();

  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext();

  const handleCity = (event) => {
    const getId = event.target.value;
    // console.log(getId);
    getValues(getId);
  };

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleCity}
        register={register}
        name="genderId"
        options={valuesCity?.data}
        emptyOptions="Sexo"
        error={errors?.genderId?.message}
      />
    </div>
  );
};

export default City;
