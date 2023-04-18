import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import Logo from "../../common/Logo";
import authService from "../../../features/auth/authServices";
import Loading from "../../common/Loading";

const Activate = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState();

  const activateAccount = useCallback(async () => {
    if (!router.query.uid && !router.query.token) {
      return;
    }
    const payload = {
      uid: router.query.uid,
      token: router.query.token,
    };
    try {
      await authService.activateEmail(payload);
      setTimeout(() => {
        router.push("/auth/login");
      }, 5000);
    } catch (e) {
      setErrors("Error al cargar");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    activateAccount();
  }, [activateAccount]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="md:w-[600px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center">
        <div className="title flex flex-col items-center">
          <Logo />
        </div>
        {errors && <p>{errors}</p>}
        {!loading && !errors && (
          <p>
            Cuenta registrada con exito, en un momento podrá acceder desde
            nuestro portal.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Activate;
