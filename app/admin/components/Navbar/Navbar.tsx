import React from 'react';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <p className={styles.name}>Mombanga Nehemie</p>
      <p className={styles.email}>nehemie.mbg@gmail.com</p>

      <div className={styles['navbar-container']}>
        <ul className={styles['navbar-list']}>
          <li className={styles['navbar-list__link']}>Paramètre</li>
          <li className={styles['navbar-list__link']}>Dashboard</li>
          <li className={styles['navbar-list__link']}>Commandes</li>
          <li className={styles['navbar-list__link']}>Utilisateurs</li>
          <li className={styles['navbar-list__link']}>Documents</li>
          <li className={styles['navbar-list__link']}>Collection</li>
        </ul>

        {/* <div className={styles['deconnection-container']}>
          <p>Deconnection</p>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
