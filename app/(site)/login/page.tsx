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

export default function Login() {
  const session = useSession();
  const router = useRouter();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

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
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.error) {
        clearInuputs([passwordRef]);
        setErrorMessage(response.error);
        errorPopUp("Une erreur s'est produite");
        throw new Error(response.error);
      }

      setErrorMessage(null);
      clearInuputs([emailRef, passwordRef]);
      successPopUp('Connexion réussie.');
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
              className={styles['register-container__form-btn']}
            >
              Connection
            </button>
          </div>
        </form>
        {/* <button onClick={() => signOut()}>Sign Out</button> */}
      </div>
    </ConnectUser>
  );
}
