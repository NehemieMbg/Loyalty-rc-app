import Navbar from './components/Navbar/Navbar';
import React from 'react';
import styles from './adminPage.module.scss';
import CollectionAdmin from './collection/page';
import Main from './components/Main';

function page() {
  return (
    <div className={styles.amdin}>
      <Main />
    </div>
  );
}

export default page;
