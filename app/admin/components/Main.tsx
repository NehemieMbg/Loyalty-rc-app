import React from 'react';
import styles from './Main.module.scss';
import Nav from './Navbar/Nav';
import CollectionAdmin from '../collection/page';

function Main() {
  return (
    <div className={styles.main}>
      <CollectionAdmin />
    </div>
  );
}

export default Main;
