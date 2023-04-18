import { forwardRef } from 'react'
import Admin from './admin'
import Customer from './customer'
import Consultant from './consultant'

import Logo from '../../common/Logo'

const CustomerSidebar = forwardRef(({ showNav, role }, ref) => {
  return (
    <div ref={ref} className='fixed w-56 h-full bg-white shadow-sm z-50'>
      <div className='flex justify-center mt-12 mb-14 mr-4'>
        <Logo />
      </div>
      {role === 'Admin' && <Admin showNav={showNav} />}
      {role === 'Customer' && <Customer showNav={showNav} />}
      {role === 'Consultant' && <Consultant showNav={showNav} />}

    </div>
  )
})

CustomerSidebar.displayName = 'CustomerSidebar'

export default CustomerSidebar
