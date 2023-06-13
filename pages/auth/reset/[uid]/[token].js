import React from 'react'
import Recovery from '../../../../components/auth/Recovery'
import Footer from '../../../../components/Footer'

const ConfirmPassword = () => {
  return (
    <>
      <Recovery />
      <Footer />
    </>
  )
}

export default ConfirmPassword

ConfirmPassword.getLayout = function PageLayout (page) {
  return <>{page}</>
}
