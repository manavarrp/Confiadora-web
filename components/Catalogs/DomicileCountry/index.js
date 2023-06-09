import styles from '../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import Selects from '../../common/Selects'
import useGetCountry from '../../../hooks/useGetCountry'

const Country = () => {
  const valuesCity = useGetCountry()

  const {
    register,
    getValues
    // formState: { errors }
  } = useFormContext()

  const handleCountry = (event) => {
    const getId = event.target.value
    // //console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <Selects
        className={styles.textbox}
        onChange={handleCountry}
        register={register}
        name='domicileCountryId'
        options={valuesCity}
        emptyOptions='País de domicilio'
       // error={errors?.genderId?.message}
      />
    </div>
  )
}

export default Country
