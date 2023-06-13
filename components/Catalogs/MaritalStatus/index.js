
import React, { useState } from 'react'
import { MaritalStatus } from '../../../enums/Enum'
import styles from '../../../styles/Username.module.css'
import { useFormContext } from 'react-hook-form'
import Selects from '../../common/Selects'

function MyComponent () {
  const [selectedId, setSelectedId] = useState('')

  const {
    register

  } = useFormContext()

  const handleSelectChange = (event) => {
    const selectedId = event.target.value
    setSelectedId(selectedId)
    // Realizar acciones según el id seleccionado
    console.log('Id seleccionado:', selectedId)
  }

  return (
    <div>
      <select value={selectedId} onChange={handleSelectChange} className={styles.textbox}>
        <option value=''>Estado Civil</option>
        {Object.values(MaritalStatus).map((status) => (
          <option key={status.id} value={status.id}>
            {status.label}
          </option>
        ))}
      </select>
      <Selects
        className={styles.textbox}
        onChange={handleSelectChange}
        register={register}
        name='birthCountryId'
        options={MaritalStatus.label}
        emptyOptions='Estado Civil'
        // error={errors?.genderId?.message}
      />

    </div>
  )
}

export default MyComponent
