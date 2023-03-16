import { useEffect, useState } from "react";
import { login } from "../../features/auth/authSlice";
import styles from "../../styles/Username.module.css";
import Logo from "../common/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/input";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/formSchema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Footer from "../footer/Footer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    initialValues: {
      UserName: "",
      Password: "",
    },
  });

  const router = useRouter();

  const { authDetails, isLoading, isFirstLogin } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const onLoginFormSubmitted = (data) => {
    dispatch(login(data));
  };

  //console.log(errors);
  //console.log(authDetails);
  useEffect(() => {
    if (authDetails) {
      router.push("/profile");
    }
    // if (isError && twoFactor) {
    //   dispatch(sendLoginCode(UserName));
    //   router.push(`/loginWithCode/${email}`);
    // }
  }, [router, authDetails]);

  return (
    <>
      <div className="md:w-[400px] shadow-sm shadow-gray bg-white w-[100%] mx-auto px-7 py-4 rounded-xl mt-8 items-center">
        <div className="flex flex-col justify-center">
          <Logo />
          <span className="text-gray ml-6">Credito al alcance de todos</span>
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
                error={errors?.UserName?.message}
              />
            </div>

            <div className="flex w-full mb-3 gap-3">
              <Input
                type="password"
                placeholder="Contraseña"
                className={styles.textbox}
                name="Password"
                register={register}
                error={errors?.Password?.message}
              />
            </div>
            <button type="submit" className={styles.btn} disabled={isLoading}>
              {isLoading ? "Cargando" : "Ingresar"}
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
                Recupérala
              </Link>
            </span>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
