import styles from '../../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import Select from '../../../common/Select'
import useGetEconomicActivities from '../../../hooks/useGetEconomicActivities'

const EconomicActivities = () => {
  const valuesEconomicActivities = useGetEconomicActivities()

  const {
    register,
    getValues,
    formState: { errors }
  } = useFormContext()

  const handleEconomicActivities = (event) => {
    const getId = event.target.value
    // console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleEconomicActivities}
        register={register}
        name='genderId'
        options={valuesEconomicActivities?.data}
        emptyOptions='Sexo'
        error={errors?.genderId?.message}
      />
    </div>
  )
}

export default EconomicActivities
