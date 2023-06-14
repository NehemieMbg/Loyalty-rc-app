'use client';

import Image from 'next/image';
import styles from './Fleet.module.scss';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { closeFleetMenu } from '@/app/store/fleet-navigation-slice';
import { closeMenu } from '@/app/store/navigation-slice';

const DUMMY_DATA = [
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

function Fleet(props) {
  const dispatch = useDispatch();

  return (
    <div className={`${props.className} ${styles['fleet-container']}`}>
      <div className={styles['fleet-menu-options']}>
        <p
          className={styles['menu-close']}
          onClick={() => {
            dispatch(closeMenu());
            dispatch(closeFleetMenu());
          }}
        >
          <span className={styles['menu-close__icon']}>&times;</span>
        </p>
        <p
          className={styles['fleet-return-menu']}
          onClick={() => dispatch(closeFleetMenu())}
        >
          <span>&larr;</span> <span>Nos Véhicules</span>
        </p>
      </div>
      <ul className={styles['fleet-list']}>
        {DUMMY_DATA.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={`collection/${item.id}`}
                className={`${styles['car-btn']} ${styles['car-preview']}`}
              >
                <Image
                  src={item.images[0]}
                  width={2650}
                  height={2190}
                  alt={item.name}
                  className={styles['car-image']}
                />
                <div className={styles['car-text__contaienr']}>
                  <h2 className={styles['car-name']}>{item.name}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fleet;
