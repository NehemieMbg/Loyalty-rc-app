import React from 'react';
import styles from './Account.module.scss';
import Link from 'next/link';

function Account() {
  return (
    <>
      <div className={styles['menu-account-container']}>
        <Link href={'login'} className={styles['to-connect-btn']}>
          Se Connecter
        </Link>
        <p className={styles['connect-msg']}>
          <Link href={'register'} className={styles['to-register-btn']}>
            Pas encore inscrit ?
          </Link>{' '}
          Pour profiter pleinement de notre service, veuillez vous inscrire
        </p>
        //* A completer
        {/* <div>
          <h2>Mon profil</h2>
        </div> */}
      </div>
    </>
  );
}

export default Account;
