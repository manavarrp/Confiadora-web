import styles from '../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import Select from '../../../components/common/Select'
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
      <Select
        className={styles.textbox}
        onChange={handleCountry}
        register={register}
        name='birthCountryId'
        options={valuesCity}
        emptyOptions='País de Nacimiento'
       // error={errors?.genderId?.message}
      />
    </div>
  )
}

export default Country
