'use client';

import styles from './register.module.scss';
import { useEffect, useState, useRef, FormEvent } from 'react';
import { clearInuputs } from '@/app/utils/formUtils';
import { checkInputsFields } from '@/app/utils/formUtils';
import { useRouter } from 'next/navigation';
import ExclamationCircle from '@/app/components/UI/ExclamationCircle';
import { errorPopUp, successPopUp } from '@/app/components/UI/SuccessPopUp';
import GoogleBtn from '@/app/components/UI/GoogleBtn';
import { signIn, useSession } from 'next-auth/react';
import ErrorMessage from '@/app/components/ErrorMessage/ErrorMessage';

import ConnectUser from '@/app/components/logins/ConnectUser';

export default function Register() {
  const session = useSession();

  const router = useRouter();
  const [data, setData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [lastNameIsFocused, setLastNameIsFocused] = useState(false);
  const [firstNameIsFocused, setFirstNameIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [confirmPasswordIsFocused, setConfirmPasswordIsFocused] =
    useState(false);

  const [lastNameError, setLastNameError] = useState();
  const [firstNameError, setFirstNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  function lastNameBlurHandler() {
    setLastNameIsFocused(true);
  }

  function firstnameBlurHandler() {
    setFirstNameIsFocused(true);
  }
  function emailBlurHandler() {
    setEmailIsFocused(true);
  }
  function passwordBlurHandler() {
    setPasswordIsFocused(true);
  }
  function confirmPasswordBlurHandler() {
    setConfirmPasswordIsFocused(true);
  }

  useEffect(() => {
    const hasValidData = checkInputsFields(data);

    if (session?.status === 'authenticated') {
      router.push('/');
    }

    if (lastNameIsFocused)
      setLastNameError(hasValidData.messages.lastNameErrorMsg);
    if (firstNameIsFocused)
      setFirstNameError(hasValidData.messages.firstNameErrorMsg);
    if (emailIsFocused) setEmailError(hasValidData.messages.emailErrorMsg);
    if (passwordIsFocused)
      setPasswordError(hasValidData.messages.passwordErrorMsg);
    if (confirmPasswordIsFocused)
      setConfirmPasswordError(hasValidData.messages.confirmPasswordErrorMsg);
  }, [
    data,
    lastNameIsFocused,
    firstNameIsFocused,
    emailIsFocused,
    passwordIsFocused,
    confirmPasswordIsFocused,
    session,
  ]);

  async function registerUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      //! TO BE ADJUSTED

      // if Error
      if (!response.ok) {
        // retrieves the response body as a text from the response object
        const messages = await response.json();
        setLastNameError(messages.lastNameErrorMsg);
        setFirstNameError(messages.firstNameErrorMsg);
        setEmailError(messages.emailErrorMsg);
        setPasswordError(messages.passwordErrorMsg);
        setConfirmPasswordError(messages.confirmPasswordErrorMsg);

        console.error(messages);

        if (messages.emailErrorMsg === 'Cette email déjà utilisé.') {
          setEmailError(messages.emailErrorMsg);
        }
        errorPopUp("Une erreur s'est produite");
        throw new Error(JSON.stringify(messages));
      }

      // if Error
      successPopUp('Votre compte a bien été créé!');

      setLastNameError('');
      setFirstNameError('');
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
    } catch (error) {
      console.error(error);
    }

    clearInuputs([
      firstNameRef,
      lastNameRef,
      emailRef,
      passwordRef,
      passwordConfirmRef,
    ]);

    // router.push('/');
  }

  return (
    <>
      <ConnectUser
        mode={'Inscription'}
        redirectLink={'login'}
        redirectMessage={'Vous avez déjà un compte ?'}
      >
        <div className={styles['signin-container']}>
          <h2 className={styles['signin-container__greeting']}>Bienvenue</h2>

          <GoogleBtn
            signInUser={() => {
              signIn('google');
            }}
          />

          <div className={styles['signin-chioce']}>ou</div>

          <form
            className={styles['register-container__form']}
            onSubmit={registerUser}
          >
            <div className={styles['register-container__form-lastname']}>
              <label htmlFor="lastname"></label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Nom"
                // required
                value={data.lastname}
                ref={lastNameRef}
                onBlur={() => lastNameBlurHandler()}
                onChange={(event) =>
                  setData({ ...data, lastname: event.target.value })
                }
              />
              {lastNameError && <ErrorMessage message={lastNameError} />}
            </div>

            <div className={styles['register-container__form-firstname']}>
              <label htmlFor="firstname"></label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Prénom"
                // required
                value={data.firstname}
                ref={firstNameRef}
                onBlur={() => firstnameBlurHandler()}
                onChange={(event) =>
                  setData({ ...data, firstname: event.target.value })
                }
              />
              {firstNameError && <ErrorMessage message={firstNameError} />}
            </div>

            <div className={styles['register-container__form-email']}>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Adresse e-mail"
                // required
                value={data.email}
                ref={emailRef}
                onBlur={() => emailBlurHandler()}
                onChange={(event) =>
                  setData({ ...data, email: event.target.value })
                }
              />
              {emailError && <ErrorMessage message={emailError} />}
            </div>

            <div className={styles['register-container__form-password']}>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                // required
                value={data.password}
                ref={passwordRef}
                onBlur={() => passwordBlurHandler()}
                onChange={(event) =>
                  setData({ ...data, password: event.target.value })
                }
              />
              {passwordError && <ErrorMessage message={passwordError} />}
            </div>

            <div className={styles['register-container__form-password2']}>
              <label htmlFor="password2"></label>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirmer le mot de passe"
                // required
                value={data.confirmPassword}
                ref={passwordConfirmRef}
                onBlur={() => confirmPasswordBlurHandler()}
                onChange={(event) =>
                  setData({ ...data, confirmPassword: event.target.value })
                }
              />
              {confirmPasswordError && (
                <ErrorMessage message={confirmPasswordError} />
              )}
            </div>

            <button
              type="submit"
              className={styles['register-container__form-btn']}
            >
              S'inscrire maintenant
            </button>
          </form>
        </div>
      </ConnectUser>
    </>
  );
}
