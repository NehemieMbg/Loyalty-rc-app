import React from 'react';
import { CollectionType } from '@/types/CollectionType';
import Link from 'next/link';

import styles from './AdditionalInformation.module.scss';

export default function AdditionalInformation(props: {
  carData: CollectionType;
}) {
  const { carData } = props;
  return (
    <div className={styles['additional-info-container']}>
      <h3 className={styles['heading-title-4']}>
        Informations supplémentaires
      </h3>

      <ul className={styles['additional-info']}>
        <li className={styles['additional-info__list']}>
          Caution de {carData.deposit}€.
        </li>
        <li className={styles['additional-info__list']}>
          L'âge minimum du conducteur pour la {carData.make} {carData.model} est
          de {carData.driverAge} ans.
        </li>
        <li className={styles['additional-info__list']}>
          Il est requis d'avoir un permis de conduire depuis un minimum de{' '}
          {carData.driverExperience} ans.
        </li>
      </ul>

      <p className={styles['additional-info__terms']}>
        N'oubliez pas de consulter nos{' '}
        <Link href="/">Termes & conditions.</Link>.
      </p>
    </div>
  );
}
