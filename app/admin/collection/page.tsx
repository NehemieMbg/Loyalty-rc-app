'use client';

import React, { useEffect, useState } from 'react';
import styles from './CollectionAdmin.module.scss';
import Link from 'next/link';
import { getCollection } from '@/app/utils/collectionUtils';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Mercedes-Benz AMG GT',
    images: [
      'https://img.jamesedition.com/listing_images/2022/10/07/13/48/01/e3f414a2-bcbd-48db-af28-6b15564a0605/je/1900xxs.jpg',
    ],
  },
  {
    id: 1,
    name: 'Mercedes-Benz AMG GT',
    images: [
      'https://img.jamesedition.com/listing_images/2022/10/07/13/48/01/e3f414a2-bcbd-48db-af28-6b15564a0605/je/1900xxs.jpg',
    ],
  },
  {
    id: 1,
    name: 'Mercedes-Benz AMG GT',
    images: [
      'https://img.jamesedition.com/listing_images/2022/10/07/13/48/01/e3f414a2-bcbd-48db-af28-6b15564a0605/je/1900xxs.jpg',
    ],
  },
  {
    id: 1,
    name: 'Mercedes-Benz AMG GT',
    images: [
      'https://img.jamesedition.com/listing_images/2022/10/07/13/48/01/e3f414a2-bcbd-48db-af28-6b15564a0605/je/1900xxs.jpg',
    ],
  },
  {
    id: 2,
    name: 'Ferrari SF90',
    images: [
      'https://img.jamesedition.com/listing_images/2023/03/17/14/03/08/0bfa8c0a-8e5d-406f-b6d2-6e2ea88438c0/je/1900xxs.jpg',
    ],
  },
  {
    id: 3,
    name: 'Alfa Romeo Giulia GTAm',
    images: [
      'https://img.jamesedition.com/listing_images/2022/09/16/14/52/11/596aa919-2761-48a2-b80b-d7da5b8c1c8a/je/1900xxs.jpg',
    ],
  },
];

function CollectionAdmin() {
  const [collectionList, setCollectionList] = useState([]);

  // async function getCollection() {
  //   const response = await fetch('/api/collection', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     const data = await response.json(); // Parse the response body as JSON
  //     console.log(data); // Access and use the data
  //   } else {
  //     console.log('Error: ' + response.status);
  //   }
  // }

  useEffect(() => {
    const fetchData = async () => {
      setCollectionList(await getCollection());
    };
    fetchData();
  }, []);

  console.log('collection list', collectionList);

  return (
    <div className={styles['collection-admin']}>
      <div className={styles.nav}>
        <h2 className={styles['page-name']}>Collection</h2>
        <div>
          <Link
            href={'/admin/collection/add-car'}
            className={styles['add-car']}
          >
            <span className={styles['add-car-logo']}>+</span>{' '}
            <p>Ajouté un véhicule</p>
          </Link>
        </div>
      </div>
      <div>
        <ul className={styles['car-list-container']}>
          {collectionList.map((car) => (
            <li key={car.id} className={styles['car-list']}>
              <div className={styles['car-list__car-container']}>
                <div className={styles['car-list__subcontainer']}>
                  <img
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    className={styles['car-list__image']}
                  />
                  <div className={styles['car-list__text']}>
                    <h2
                      className={styles['car-list__title']}
                    >{`${car.year} ${car.make} ${car.model}`}</h2>
                    <p className={styles['car-list__price']}>
                      Prix de départ: {car.dayPrice}€
                    </p>
                  </div>
                </div>

                <div className={styles['car-list__btns']}>
                  <Link
                    href={`admin/collection/${car.id}`}
                    className={styles['car-list__btn']}
                  >
                    Modifier
                  </Link>
                  <p
                    className={`${styles['car-list__btn']} ${styles['car-list__btn-delete']}`}
                  >
                    Supprimer
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CollectionAdmin;
