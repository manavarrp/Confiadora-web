import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import authService from '../../featuress/auth/authServices';
import Footer from '../footer/Footer';
import Logo from '../../common/logo';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ResetPasswordConfirm = () => {
  const [form, setForm] = useState({ newPassword: '', confirmPassword: '' });

  const { newPassword, confirmPassword } = form;

  const router = useRouter();

  const { authDetails, isSuccess, isLoading } = useSelector(
    (state) => state.auth
  );

  const [message, setMessage] = useState('');
  const [showAlert, setAlert] = useState(false);
  const [isProcessing, setProcessing] = useState(false);

  const formRef = useRef(null);

  /*   useEffect(() => {
    if (isSuccess || authDetails) {
      navigate(router, authDetails);
    }
  }, [authDetails, isSuccess]); */

  const onInputChange = (e) => {
    setForm((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const onForgotPasswordFormSubmitted = async (e) => {
    e.preventDefault();

    setAlert(false);
    setProcessing(true);

    const payload = {
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      uid: router.query.uid,
      token: router.query.token,
    };

    if (payload.newPassword !== payload.confirmPassword) {
      alert('Contraseñas no coinciden');
      setProcessing(false);
      return;
    }
    const error = '';

    const { data } = await authService.passwordResetConfirm(payload);
    console.log(data);

    if (error) {
      toast.error('');
      toast.error('A ocurrido un error');
      setProcessing(false);
      return;
    }
   
    toast.info('Contraseña cambiada con exito');
    
    setForm({ newPassword: '', confirmPassword: '' });
  };

  useEffect(() => {
    if (isSuccess || authDetails) {
      router.push('/login');
    }
  }, [router, authDetails, isSuccess]);

  return (
    <>
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-center items-center h-screen">
          <div className={styles.glass}>
            <Logo />
            <div className="title flex flex-col items-center">
              <span className=" text-xl w-2/3 text-center text-gray">
                Ingresa la nueva Contraseña
              </span>
            </div>
            <form
              className="py-20"
              onSubmit={onForgotPasswordFormSubmitted}
              ref={formRef}
            >
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  type="text"
                  placeholder="Contraseña Nueva"
                  className={styles.textbox}
                  value={newPassword}
                  onChange={onInputChange}
                  autoFocus
                  name="newPassword"
                />
                <input
                  type="text"
                  placeholder="Confirmar Contraseña"
                  className={styles.textbox}
                  autoFocus
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onInputChange}
                />
                <button
                  type="submit"
                  className={styles.btn}
                  disabled={isLoading}
                >
                  {isLoading ? 'cargando' : 'Acceder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPasswordConfirm;
