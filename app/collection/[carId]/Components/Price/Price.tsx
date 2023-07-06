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
          <p className={styles['table-info']}>24h (lun - ven)</p>
          <p className={styles['table-info']}>Lundi - Vendredi</p>
          <p className={styles['table-info']}>Week-end</p>
          <p className={styles['table-info']}>Semaine</p>
        </div>

        <div className={styles['table-content']}>
          <p className={styles['table-title']}>Prix</p>
          <p className={styles['table-info']}>{carData?.dayPrice}€</p>
          <p className={styles['table-info']}>{carData?.weekPrice}€</p>
          <p className={styles['table-info']}>{carData?.weekEndPrice}€</p>
          <p className={styles['table-info']}>{carData?.monToSunPrice}€</p>
        </div>

        <div className={styles['table-content']}>
          <p className={styles['table-title']}>Kilomètres inclus</p>
          <p className={styles['table-info']}>{carData?.dayKm}km</p>
          <p className={styles['table-info']}>{carData?.weekKm}km</p>
          <p className={styles['table-info']}>{carData?.weekEndKm}km</p>
          <p className={styles['table-info']}>{carData?.monToSunKm}km</p>
        </div>
      </div>

      <p className={styles['car-price-text']}>
        {' '}
        * Chaque kilomètre supplémentaire pour la {carData?.make}{' '}
        {carData?.model} sera facturé à 0,80€ par kilomètre.
      </p>
    </div>
  );
}
