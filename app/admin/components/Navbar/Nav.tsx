import React from 'react';
import styles from './Nav.module.scss';

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles['admin-name']}>
        <p>Nehemie Mombanga</p>
      </div>
      <div className={styles['admin-email']}>
        <p>nehemie.mbg@gmail.com</p>
      </div>
    </div>
  );
}

export default Nav;
