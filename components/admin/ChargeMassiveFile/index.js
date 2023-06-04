import React, { useCallback, useState } from 'react'
import ShowImage from '../../common/ShowImage'

import DropBoxMassiveCharge from '../../common/DropBoxMassiveCharge'
import usePostChargeDataMassive from '../../../hooks/usePostChargeDataMassive'

function App () {
  const { loading, postPostChargeData, errorForm, resetFileData } = usePostChargeDataMassive()
  const [images, setImages] = useState([])

  const onDrop = useCallback(async (acceptedFiles) => {
    acceptedFiles.map(async (file, index) => {
      const reader = new FileReader()

      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result }
        ])
      }

      reader.readAsDataURL(file)
      await postPostChargeData(file)
      return file
    })
  }, [postPostChargeData])

  return (
    <div className='App'>
      <DropBoxMassiveCharge onDrop={onDrop} />
      <ShowImage images={images} />
    </div>
  )
}

export default App
