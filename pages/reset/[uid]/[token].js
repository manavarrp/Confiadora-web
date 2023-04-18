import React from 'react'
import Recovery from '../../../components/auth/Recovery'
import Footer from '../../../components/Footer'

const confirmaPassword = () => {
  return (
    <>
      <Recovery />
      <Footer />
    </>
  )
}

export default confirmaPassword

confirmaPassword.getLayout = function PageLayout (page) {
  return <>{page}</>
}
