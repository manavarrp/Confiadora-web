import { forwardRef } from 'react'
import Admin from './admin'
import Customer from './customer'
import Consultant from './consultant'

import Logo from '../../common/Logo'

const CustomerSidebar = forwardRef(({ showNav, role }, ref) => {
  return (
    <div ref={ref} className='fixed w-60 h-full bg-white shadow-sm '>
      <div className='flex justify-center mt-12 mb-14 mr-4'>
        <Logo />
      </div>
      {role === 'Super Administrator' && <Admin showNav={showNav} />}
      {role === 'Customer' && <Customer showNav={showNav} />}
      {role === 'Consultant' && <Consultant showNav={showNav} />}

    </div>
  )
})

CustomerSidebar.displayName = 'CustomerSidebar'

export default CustomerSidebar
