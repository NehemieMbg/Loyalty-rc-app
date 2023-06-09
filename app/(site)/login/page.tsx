'use client';

import ConnectUser from '@/app/components/logins/ConnectUser';
import styles from './login.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { successPopUp, errorPopUp } from '@/app/components/UI/SuccessPopUp';
import { useRef, useEffect } from 'react';
import { clearInuputs } from '@/app/utils/formUtils';
import ExclamationCircle from '@/app/components/UI/ExclamationCircle';
import GoogleBtn from '@/app/components/UI/GoogleBtn';
import { useRouter } from 'next/navigation';
import CircularIndeterminate from '@/app/components/UI/CircularInterminate';

export default function Login() {
  const session = useSession();
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [submittingIsLoading, setSubmittingIsLoading] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/');
    }
  });

  async function loginUser(event) {
    event.preventDefault();

    try {
      setSubmittingIsLoading(true);
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      // If Error
      if (response?.error) {
        clearInuputs([passwordRef]);
        setErrorMessage(response.error);
        errorPopUp("Une erreur s'est produite");
        setSubmittingIsLoading(false);
        throw new Error(response.error);
      }

      // If no Error
      setErrorMessage(null);
      clearInuputs([emailRef, passwordRef]);
      setSubmittingIsLoading(false);
      successPopUp('Connexion réussie.');
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ConnectUser
      mode={'Connection'}
      redirectLink={'register'}
      redirectMessage={'Pas encore membre ?'}
    >
      <div className={styles['signin-container']}>
        <h2 className={styles['signin-container__greeting']}>Bienvenue</h2>

        <GoogleBtn signInUser={() => signIn('google')} />

        <div className={styles['signin-chioce']}>ou</div>

        <form
          className={styles['register-container__form']}
          onSubmit={loginUser}
        >
          <div className={styles['register-container__form-email']}>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse e-mail"
              ref={emailRef}
              value={data.email}
              onChange={(event) =>
                setData({ ...data, email: event.target.value })
              }
              // required
            />
          </div>

          <div className={styles['register-container__form-password']}>
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              ref={passwordRef}
              value={data.password}
              onChange={(event) =>
                setData({ ...data, password: event.target.value })
              }
            />
            {errorMessage && (
              <p className={styles['error-message']}>
                <ExclamationCircle
                  className={styles['exclamation-icon-circle']}
                />

                {errorMessage}
              </p>
            )}
          </div>

          <div className={styles['register-action__container']}>
            <Link href={'/'} className={styles['regsiter-password-forgot']}>
              Mot de passe oublié ?
            </Link>
            <button
              type="submit"
              className={`${styles['register-container__form-btn']} ${
                submittingIsLoading ? styles['btn-disabled'] : null
              }`}
            >
              {submittingIsLoading && (
                <CircularIndeterminate
                  className={styles['register-container__form-btn-loading']}
                />
              )}
              Connection
            </button>
          </div>
        </form>
      </div>
    </ConnectUser>
  );
}
