import React, { useEffect, useState } from "react";
import styles from "../../styles/Username.module.css";
import { useRouter } from "next/router";
import authService from "../../features/auth/authServices";
import Footer from "../footer/Footer";
import Logo from "../common/logo";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "../common/input";
import { recoveryPasswordSchema } from "../../utils/formSchema/recoveryPasswordSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const FirstLogin = () => {
  const { authDetails, isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(recoveryPasswordSchema),
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  if (!authDetails?.isFirstLogin) return null;

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <Logo />
            <div className="title flex flex-col items-center">
              <span className=" text-xl w-2/3 text-center text-gray">
                Ingresa la nueva Contraseña
              </span>
            </div>
            <form className="py-20">
              <div className="textbox flex flex-col items-center gap-6">
                <Input
                  type="password"
                  placeholder="Contraseña"
                  className={styles.textbox}
                  name="newPassword"
                  register={register}
                  error={errors?.newPassword?.message}
                />

                <Input
                  type="password"
                  placeholder="Contraseña"
                  className={styles.textbox}
                  name="confirmPassword"
                  register={register}
                  error={errors?.confirmPassword?.message}
                />

                <button
                  type="submit"
                  className={styles.btn}
                  disabled={isLoading}
                >
                  {isLoading ? "cargando" : "Cambiar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLogin;
