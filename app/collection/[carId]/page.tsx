import React from 'react';
import { getCarData } from '@/app/utils/collectionUtils';
import CarImages from '../Components/CarImages/CarImages';
import styles from './CarSection.module.scss';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: {
    carId: string;
  };
}) {
  const carData = await getCarData(params.carId);

  return (
    <div className={styles['car-section']}>
      <div className={styles['subcontainer']}>
        <div className={styles['return-btn-container']}>
          <Link href={'/'} className={styles['return-btn']}>
            <span className={styles['return-btn-icon']}>&larr;</span>{' '}
            <span>Page d'acceuil</span>
          </Link>
        </div>
      </div>

      <CarImages carData={carData} />
    </div>
  );
}
