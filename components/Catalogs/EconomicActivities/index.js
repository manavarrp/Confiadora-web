import styles from '../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import Selects from '../../common/Selects'
import useGetEconomicActivities from '../../../hooks/useGetEconomicActivities'

const EconomicActivities = () => {
  const valuesEconomicActivities = useGetEconomicActivities()

  const {
    register,
    getValues
    // formState: { errors }
  } = useFormContext()

  const handleEconomicActivities = (event) => {
    const getId = event.target.value
    // //console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <Selects
        className={styles.textbox}
        onChange={handleEconomicActivities}
        register={register}
        name='economicActivityId'
        options={valuesEconomicActivities}
        emptyOptions='Actividad Económica'
       // error={errors?.genderId?.message}
      />
    </div>
  )
}

export default EconomicActivities
