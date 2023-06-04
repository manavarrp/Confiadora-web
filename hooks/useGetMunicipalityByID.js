import { useCallback, useState } from 'react'
import { GetMunicipalityById } from '../services/api'
import { useSelector } from 'react-redux'

const useGetMunicipalityByID = () => {
  const state = useSelector((state) => state.physicalPersonForm)
  const [optionsMunicipality, setOptions] = useState(() => state.municipalities)

  const GetDataMunicipality = useCallback(async (id) => {
    const result = await GetMunicipalityById(id)
    setOptions(result?.data.data)
<<<<<<< Updated upstream
    //console.log(result, 'result')
=======
    // console.log(result, 'result')
>>>>>>> Stashed changes
  }, [])

  return { GetDataMunicipality, optionsMunicipality }
}

export default useGetMunicipalityByID
