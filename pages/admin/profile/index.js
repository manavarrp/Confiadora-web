<<<<<<< Updated upstream
import Profile from "../../../components/profile";
import Header from "../../../components/PersonPhysicalForm/Header";
import { IdentificationIcon } from "@heroicons/react/24/solid";

function RegisterForms() {
=======
import Profile from '../../../components/Profile'
import Header from '../../../components/PersonPhysicalForm/Header'
import { IdentificationIcon } from '@heroicons/react/24/solid'

function RegisterForms () {
>>>>>>> Stashed changes
  // const router = useRouter()

  /*  const onSubmitPersonFormNext = () => {
    router.push('/customer/personal-form/work-data')
  }
 */
  return (
    <>
      <Header
<<<<<<< Updated upstream
        icon={<IdentificationIcon className="h-10 w-10" color="#477EFA" />}
        title="Mi Perfil"
      />
      <Profile />
    </>
  );
}

export default RegisterForms;
=======
        icon={<IdentificationIcon className='h-10 w-10' color='#477EFA' />}
        title='Mi Perfil'
      />
      <Profile />
    </>
  )
}

export default RegisterForms
>>>>>>> Stashed changes
