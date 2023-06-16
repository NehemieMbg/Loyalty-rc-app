import React from 'react';
import styles from './CollectionAdmin.module.scss';

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
  return (
    <div className={styles['collection-admin']}>
      <div className={styles.nav}>
        <h2 className={styles['page-name']}>Collection</h2>
        <div>
          <button className={styles['add-car']}>
            <span className={styles['add-car-logo']}>+</span>{' '}
            <p>Ajouté un véhicule</p>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CollectionAdmin;
