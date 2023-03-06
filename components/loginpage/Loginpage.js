import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { login, reset } from "../../featuress/auth/authSlice";
import styles from "../../styles/Username.module.css";
import Logo from "../../common/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import Input from "../../common/input";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const { authDetails, isLoading, isSuccess, isError, message, error } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [activated, setActivated] = useState(false);

  /*   useEffect(() => {
    if (isError) {
      toast.error("sdasdasd");
    }
    dispatch(reset());
  }, [isError, message]);
 */

  const onLoginFormSubmitted = (data) => {
    dispatch(login(data));
    setActivated(true);
  };

  /* useEffect(() => {
    if (authDetails && activated) {
      router.push('/profile', authDetails);
    }
  }, [router, authDetails, activated]);
 */
  /*   useEffect(() => {
    if (isSuccess || authDetails) {
      router.push('/profile', authDetails);
    }
  }, [authDetails, isSuccess]);

   useEffect(() => {
    if (userInfo && activated) {
      router.push('/profile');
    }
  }, [router, userInfo, activated]);
 */

  useEffect(() => {
    if (authDetails && isSuccess) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  }, [router, authDetails, isSuccess]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen my-6">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <Logo />
            <span className=" text-center text-gray ml-6">
              Credito al alcance de todos
            </span>
          </div>
          <form className="py-1" onSubmit={handleSubmit(onLoginFormSubmitted)}>
            <div className="profile flex justify-center py-4">
              <picture>
                <img
                  className={styles.profile_img}
                  src="./profile.png"
                  alt="avatar"
                />
              </picture>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="flex w-full mb-3 gap-3">
              <Input
                type="email"
                placeholder="Correo electronico"
                className={styles.textbox}
                name="UserName"
                register={register}
              />
              </div>

              <div className="flex w-full mb-3 gap-3">
                <Input 
                 type="password"
                 placeholder="Contraseña"
                 className={styles.textbox}
                 name="Password"
                 register={register}
                
                />
              </div>
              <button
                type="submit"
                className={styles.btn}
                disabled={isLoading | isSuccess}
              >
                {isLoading ? "cargando" : "Ingreso"}
              </button>
            </div>
            <div className="text-center py-4 text-gray">
              <span>
                ¿ No eres usuario ?
                <Link className="text-darkBlue" href="/register">
                  {" "}
                  Registrate ahora
                </Link>
              </span>
            </div>
            <div className="text-center py-2 text-gray">
              <span>
                ¿ No recuerdas tu contraseña ?
                <Link className="text-darkBlue" href="/reset">
                  {" "}
                  Recuperala
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
