import styles from '../../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import useGetCologne from '../../../../hooks/useGetCologne'
import Select from '../../../common/Select'

const Colony = () => {
  const valuesCologne = useGetCologne()

  const {
    register,
    getValues,
    formState: { errors }
  } = useFormContext()

  const handleColony = (event) => {
    const getId = event.target.value
    // console.log(getId);
    getValues(getId)
  }

  return (
    <div>
      <Select
        className={styles.textbox}
        onChange={handleColony}
        register={register}
        name='genderId'
        options={valuesCologne?.data}
        emptyOptions='Sexo'
        error={errors?.genderId?.message}
      />
    </div>
  )
}

export default Colony
