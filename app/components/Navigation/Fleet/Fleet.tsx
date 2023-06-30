'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Fleet.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getCollection } from '@/app/utils/collectionUtils';

export default function Fleet(props: any) {
  const { collectionList } = props;
  return (
    <>
      <ul className={styles['fleet-list']}>
        {collectionList.map((car) => {
          return (
            <li key={car.id} onClick={props.closeMenu}>
              <Link
                href={`collection/${car.id}`}
                className={`${styles['car-btn']} ${styles['car-preview']}`}
              >
                <Image
                  src={car.images[0]}
                  width={2650}
                  height={2190}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className={styles['car-image']}
                />
                <div className={styles['car-text__contaienr']}>
                  <h2
                    className={styles['car-name']}
                  >{`${car.make} ${car.model}`}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
