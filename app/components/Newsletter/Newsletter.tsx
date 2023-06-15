'use client';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { errorPopUp, successPopUp } from '@/app/components/UI/SuccessPopUp';
import ErrorMessage from '@/app/components/ErrorMessage/ErrorMessage';
import styles from './Newsletter.module.scss';
import { usePathname } from 'next/navigation';

// Regler les titre sur le home page (mode telephone)

function Newsletter() {
  const pathname = usePathname();
  const [emailError, setEmailError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  const showNewsletter = pathname === '/';

  async function newsletterSubmitHandler(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const email = (emailRef.current as any)?.value;

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const error = await response.text();
        setEmailError(error);

        errorPopUp("Une erreur s'est produite");
        throw new Error(error);
      }

      setEmailError('');
      (emailRef.current as HTMLInputElement).value = '';
      successPopUp('Vous êtes désormais inscrit à notre newsletter.');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {showNewsletter && (
        <div className={styles['newsletter']}>
          <div className={styles['newsletter-hl']}></div>
          <div className={styles['newsletter-container']}>
            <div className={styles['newsletter-text__container']}>
              <h1 className={styles['heading-title-1']}>Newsletter</h1>
              <p className={styles['newsletter-text']}>
                Découvrez notre newsletter exclusive sur la location de
                véhicules haut de gamme ! Recevez les dernières tendances,
                conseils et histoires de nos experts passionnés. Abonnez-vous
                dès maintenant et vivez une expérience unique à chaque trajet
                automobile.
              </p>
            </div>

            <form
              action="/"
              className={styles['newsletter-form']}
              onSubmit={newsletterSubmitHandler}
            >
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Email"
                className={styles['newsletter-form__input']}
                ref={emailRef}
              />
              <button className={styles['btn-primary']}>Continuer</button>
              <p className={styles['form-text']}>
                En partageant votre adresse e-mail, vous consentez à nos{' '}
                <Link href={'terms'} className={styles['text-highlight']}>
                  conditions d'utilisation
                </Link>{' '}
                et à notre{' '}
                <Link href={'privacy'} className={styles['text-highlight']}>
                  politique de confidentialité.
                </Link>
              </p>
              {emailError !== '' && <ErrorMessage message={emailError} />}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Newsletter;
