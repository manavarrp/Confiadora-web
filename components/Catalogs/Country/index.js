<<<<<<< Updated upstream
<<<<<<< Updated upstream
import styles from "../../../styles/Username.module.css";
import { useFormContext } from "react-hook-form";
import Selects from "../../../components/common/Selects";
import useGetCountry from "../../../hooks/useGetCountry";
=======
=======
>>>>>>> Stashed changes
import styles from '../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import Selects from '../../../components/common/Selects'
import useGetCountry from '../../../hooks/useGetCountry'
>>>>>>> Stashed changes

const Country = () => {
  const valuesCity = useGetCountry();

  const {
    register,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    getValues,
    // formState: { errors }
  } = useFormContext();

  const handleCountry = (event) => {
    const getId = event.target.value;
    // //console.log(getId);
    getValues(getId);
  };
=======
=======
>>>>>>> Stashed changes
    getValues
    // formState: { errors }
  } = useFormContext()

  const handleCountry = (event) => {
    const getId = event.target.value
    // //console.log(getId);
    getValues(getId)
  }
>>>>>>> Stashed changes

  return (
    <div>
      <Selects
        className={styles.textbox}
        onChange={handleCountry}
        register={register}
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        name="birthCountryId"
        options={valuesCity}
        emptyOptions="País de Nacimiento"
=======
        name='birthCountryId'
        options={valuesCity}
        emptyOptions='País de Nacimiento'
>>>>>>> Stashed changes
=======
        name='birthCountryId'
        options={valuesCity}
        emptyOptions='País de Nacimiento'
>>>>>>> Stashed changes
        // error={errors?.genderId?.message}
      />
    </div>
  );
};

export default Country;
