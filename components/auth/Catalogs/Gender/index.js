import styles from '../../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import useGetGender from '../../../../hooks/useGetGender'
import SelectList from '../../../common/SelectList'

const Gender = ({ onBlurData }) => {
  const valuesGender = useGetGender()

  const {
    register,
    getValues,
    formState: { errors }
  } = useFormContext()

  const handleGenders = (event) => {
    const getId = event.target.value
    // //console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <SelectList
        className={styles.textbox}
        onChange={handleGenders}
        register={register}
        name='genderId'
        options={valuesGender?.data}
        emptyOptions='Sexo'
        onBlur={onBlurData}
        error={errors?.genderId?.message}
      />
    </div>
  )
}

export default Gender
