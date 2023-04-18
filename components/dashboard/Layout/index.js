import { Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useMemo, useState } from 'react'
import Navbar from '../Navbar'
import { useSession } from 'next-auth/react'
import Loading from '../../common/Loading'
import { KEY_ROLES } from '../../../config'
import Sidebar from '../Sidebar'

function Layout ({ children }) {
  const [showNav, setShowNav] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const { data } = useSession()
  const role = useMemo(() => {
    return data?.user[KEY_ROLES]
  }, [data?.user])

  console.log({ role })

  const user = data?.user
  console.log({ user })
  function handleResize () {
    if (innerWidth <= 640) {
      setShowNav(false)
      setIsMobile(true)
    } else {
      setShowNav(true)
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      addEventListener('resize', handleResize)
    }
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  const { status } = useSession({ required: true })

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <>
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter='transform transition duration-[400ms]'
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        leave='transform duration-[400ms] transition ease-in-out'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-full'
      >

        <Sidebar showNav={showNav} role={role} />

      </Transition>

      <main
        className={`pt-16 transition-all duration-[400] ${
          showNav && !isMobile ? 'pl-56' : ''
        }`}
      >
        <div className='px-4 md:px-16'>{children}</div>
      </main>
    </>
  )
}

export default Layout
