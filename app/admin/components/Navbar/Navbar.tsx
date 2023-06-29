'use client';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

function Navbar(props: {
  adminName: string | undefined;
  adminEmail: string | undefined;
}) {
  return (
    <div className={styles.navbar}>
      <p className={styles.name}>{props.adminName}</p>
      <p className={styles.email}>{props.adminEmail}</p>

      <div className={styles['navbar-container']}>
        <div className={styles['navbar-list']}>
          {/* <Link
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
          </Link> */}

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

        <div className={styles['logout-container']}>
          <p className={styles.logout} onClick={() => signOut()}>
            Deconnection
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
