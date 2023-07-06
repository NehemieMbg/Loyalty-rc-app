import React from 'react';
import { CollectionType } from '@/types/CollectionType';

import styles from './Book.module.scss';

export default function Book(props: { carData: CollectionType }) {
  const { carData } = props;

  return (
    <div className={styles['book-container']}>
      <h3 className={styles['book-title']}>Réservez maintenant.</h3>
      <p className={styles['book-text']}>
        À partir de <span>{carData?.dayPrice}€</span> / jour (TVA incluse)
      </p>

      <div className={styles['book-btns']}>
        <button className={styles['book-btn']}>Réservez</button>
      </div>

      <div className={styles['book-address']}>
        <h3>Siege social</h3>
        <address>
          Bureau 3, 38 bd Carnot <br /> Lille 59800
        </address>
      </div>
    </div>
  );
}
