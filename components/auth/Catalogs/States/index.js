import styles from '../../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import useGetStateRegister from '../../../../hooks/useGetStateRegister'
import SelectList from '../../../common/SelectList'

const States = ({ onBlurData }) => {
  const valuesStates = useGetStateRegister()
  const {
    register,
    getValues
    //   formState: { errors }
  } = useFormContext()

  const handleMunipality = (event) => {
    const getId = event.target.value
    // //console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <SelectList
        className={styles.textbox}
        onChange={handleMunipality}
        register={register}
        options={valuesStates?.data}
        emptyOptions='Estado de nacimiento'
        name='stateId'
        onBlur={onBlurData}
     //   error={errors?.stateId?.message}
      />
    </div>
  )
}

export default States
