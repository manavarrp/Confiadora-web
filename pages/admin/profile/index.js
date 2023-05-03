import Profile from "../../../components/profile";
import Header from "../../../components/PersonPhysicalForm/Header";
import { IdentificationIcon } from "@heroicons/react/24/solid";

function RegisterForms() {
  // const router = useRouter()

  /*  const onSubmitPersonFormNext = () => {
    router.push('/customer/personal-form/work-data')
  }
 */
  return (
    <>
      <Header
        icon={<IdentificationIcon className="h-10 w-10" color="#477EFA" />}
        title="Mi Perfil"
      />
      <Profile />
    </>
  );
}

export default RegisterForms;
