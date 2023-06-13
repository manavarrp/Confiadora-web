import Footer from '../../../components/Footer'
import LoginWithCode from '../../../components/auth/LoginWithCode'

const TwoFactorAuth = () => {
  return (
    <>
      <LoginWithCode />
      <Footer />
    </>
  )
}

export default TwoFactorAuth

TwoFactorAuth.getLayout = function PageLayout (page) {
  return <>{page}</>
}
