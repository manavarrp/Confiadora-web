import FirstLogin from '../../../components/auth/FirstLogin'

const ChangePassword = () => {
  return (
    <FirstLogin />
  )
}

export default ChangePassword

ChangePassword.getLayout = function PageLayout (page) {
  return <>{page}</>
}
