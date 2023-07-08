'use client';

import React from 'react';
import { CollectionType } from '@/types/CollectionType';
import { useDispatch } from 'react-redux';
import { openGallery } from '@/app/store/gallery-slice';
import styles from './CarImages.module.scss';

export default function CarImages(props: { carData: CollectionType }) {
  const dispatch = useDispatch();
  const { carData } = props;

  function openGalleryHandler() {
    dispatch(openGallery());
  }

  return (
    <div
      className={styles['car-sideImages-container']}
      onClick={openGalleryHandler}
    >
      <button className={styles['btn-open-gallery']}>
        {carData?.images.length} Images
      </button>
      <img
        src={carData?.images[0]}
        alt={`${carData?.make} ${carData?.model}`}
        className={`${styles['car-images__item']} ${styles['car-images__item-1']}`}
      />
      <img
        src={carData?.images[1]}
        alt={`${carData?.make} ${carData?.model}`}
        className={`${styles['car-images__item']} ${styles['car-images__item-2']}`}
      />
      <img
        src={carData?.images[2]}
        alt={`${carData?.make} ${carData?.model}`}
        className={`${styles['car-images__item']} ${styles['car-images__item-3']}`}
      />
      <img
        src={carData?.images[3]}
        alt={`${carData?.make} ${carData?.model}`}
        className={`${styles['car-images__item']} ${styles['car-images__item-4']}`}
      />
      <img
        src={carData?.images[4]}
        alt={`${carData?.make} ${carData?.model}`}
        className={`${styles['car-images__item']} ${styles['car-images__item-5']}`}
      />
    </div>
  );
}
