'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Fleet.module.scss';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { closeFleetMenu } from '@/app/store/fleet-navigation-slice';
import { closeMenu } from '@/app/store/navigation-slice';
import { getCollection } from '@/app/utils/collectionUtils';

function Fleet() {
  const [collectionList, setCollectionList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      setCollectionList(await getCollection());
    }
    fetchData();
  }, []);

  return (
    <>
      <ul className={styles['fleet-list']}>
        {collectionList.map((car) => {
          return (
            <li key={car.id}>
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

export default Fleet;
