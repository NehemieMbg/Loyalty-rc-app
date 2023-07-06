import React from 'react';
import { CollectionType } from '@/types/CollectionType';

import styles from './Price.module.scss';

export default function Price(props: { carData: CollectionType }) {
  const { carData } = props;
  return (
    <div className={styles['car-price-container']}>
      <h2 className={styles['car-price-title']}>Prix de location</h2>

      <div className={styles.table}>
        <div className={styles['table-content']}>
          <p className={styles['table-title']}>Durée</p>
          <p>24h (lun - ven)</p>
          <p>Lundi - Vendredi</p>
          <p>Week-end</p>
          <p>Semaine</p>
        </div>

        <div className={styles['table-content']}>
          <p className={styles['table-title']}>Prix</p>
          <p>{carData.dayPrice}€</p>
          <p>{carData.weekPrice}€</p>
          <p>{carData.weekEndPrice}€</p>
          <p>{carData.monToSunPrice}€</p>
        </div>

        <div className={styles['table-content']}>
          <p className={styles['table-title']}>Kilomètres inclus</p>
          <p>{carData.dayKm}km</p>
          <p>{carData.weekKm}km</p>
          <p>{carData.weekEndKm}km</p>
          <p>{carData.monToSunKm}km</p>
        </div>
      </div>

      <p className={styles['car-price-text']}>
        {' '}
        * Chaque kilomètre supplémentaire pour la {carData.make} {carData.model}{' '}
        sera facturé à 0,80€ par kilomètre.
      </p>
    </div>
  );
}
