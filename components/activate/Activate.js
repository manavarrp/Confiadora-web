import styles from "../../styles/Username.module.css";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Logo from "../common/logo";
import authService from "../../features/auth/authServices";

const Activate = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState();
  const activate_account = useCallback(async () => {
    const payload = {
      uid: router.query.uid,
      token: router.query.token,
    };
    try {
      await authService.activateEmail(payload);
      setTimeout(() => {
        router.push("/login");
      }, 5000);
    } catch (e) {
      setErrors("Error al cargar, en estos momentos no es posible atender su solicitud.");
    } finally {
      setLoading(false);
    }
  }, [router.query.uid, router.query.token]);

  useEffect(() => {
    activate_account();
  }, [activate_account]);

  return (
    <>
      <div className="container mx-auto pb-2">
        <div className="flex justify-center items-center h-screen py-1">
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <Logo />
            </div>
            {loading && <p>Cargando su solicitud.</p>}
            {errors && <p>{errors}</p>}
            {!loading && !errors && (
              <p>Cuenta registrada con exito, ahora puede acceder desde nuestro portal</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Activate;
