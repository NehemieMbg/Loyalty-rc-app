import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <p className={styles.name}>Mombanga Nehemie</p>
      <p className={styles.email}>nehemie.mbg@gmail.com</p>

      <div className={styles['navbar-container']}>
        <div className={styles['navbar-list']}>
          <Link
            href={'admin/dashboard'}
            className={styles['navbar-list__link']}
          >
            Dashboard
          </Link>

          <Link href={'admin/orders'} className={styles['navbar-list__link']}>
            Commandes
          </Link>

          <Link href={'admin/users'} className={styles['navbar-list__link']}>
            Utilisateurs
          </Link>

          <Link
            href={'admin/documents'}
            className={styles['navbar-list__link']}
          >
            Documents
          </Link>

          <Link
            href={'admin/collection'}
            className={styles['navbar-list__link']}
          >
            Collection
          </Link>

          <Link href={'admin/settings'} className={styles['navbar-list__link']}>
            Paramètre
          </Link>
        </div>

        {/* <div className={styles['deconnection-container']}>
          <p>Deconnection</p>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
