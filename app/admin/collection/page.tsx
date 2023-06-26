'use client';

import React, { useEffect, useState } from 'react';
import styles from './CollectionAdmin.module.scss';
import Link from 'next/link';

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
  const [collectionList, setCollectionList] = useState();

  async function getCollection() {
    const response = await fetch('/api/collection', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json(); // Parse the response body as JSON
      console.log(data); // Access and use the data
    } else {
      console.log('Error: ' + response.status);
    }
  }

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div className={styles['collection-admin']}>
      <div className={styles.nav}>
        <h2 className={styles['page-name']}>Collection</h2>
        <div>
          <Link href={'/admin/edit-car'} className={styles['add-car']}>
            <span className={styles['add-car-logo']}>+</span>{' '}
            <p>Ajouté un véhicule</p>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CollectionAdmin;
