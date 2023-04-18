import React, { useState } from 'react'
import States from '../../components/auth/Catalogs/States'
import Select from '../common/Select'

import SelectList from '../common/SelectList'

const FullAddress = () => {
  const [state, setState] = useState('')
  const [town, setTown] = useState('')
  const [suburb, setSuburb] = useState('')
  return (
    <div className='flex flex-col w-full mb-3 gap-3 sm:flex-row'>

      <pre><code>{state}- {town}- {suburb} </code></pre>

    </div>
  )
}

export default FullAddress
