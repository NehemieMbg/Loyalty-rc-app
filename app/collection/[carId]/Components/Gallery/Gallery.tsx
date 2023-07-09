'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openGallery, closeGallery } from '@/app/store/gallery-slice';
import { CollectionType } from '@/types/CollectionType';

import styles from './Gallery.module.scss';
import Image from 'next/image';
import PictureGallery from './PictureGallery/PictureGallery';

export default function Gallery(props: { carData: CollectionType }) {
  const { carData } = props;
  const dispatch = useDispatch();

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [pictureOpen, setPictureOpen] = useState(false);

  const galleryIsOpen = useSelector(
    (state: {
      gallery: {
        galleryIsActive: boolean;
      };
    }) => state.gallery.galleryIsActive
  );

  useEffect(() => {
    if (galleryIsOpen) {
      setGalleryOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setGalleryOpen(false);
      //   document.body.style.overflow = 'hidden';

      document.body.style.overflow = 'visible';
    }
  }, [galleryIsOpen]);

  function closeGalleryHandler() {
    dispatch(closeGallery());
  }

  function galleryClassname(idx: number) {
    if (idx % 2 === 0) return `${styles['image-container-1']}`;
    else return `${styles['image-container-2']}`;
  }

  return (
    <div
      className={`${styles.gallery} ${galleryOpen ? `${styles.active}` : ''}`}
    >
      <div className={styles['navbar-container']}>
        <div className={styles.navbar}>
          <div
            className={styles['navbar-return-btn']}
            onClick={closeGalleryHandler}
          >
            <p>&larr;</p>
            <p>Retour</p>
          </div>

          <div className={styles['navbar-gallery-mode']}>
            <p className={styles['navbar-active-mode']}>
              {carData?.images.length} Photos
            </p>
          </div>
        </div>
      </div>

      <ul className={styles['gallery-images']}>
        {carData?.images.map((img, idx) => (
          <li
            className={`${galleryClassname(idx)} ${styles[`img-${idx + 1}`]}`}
          >
            <Image
              src={img}
              alt={`${carData.make} ${carData.model}`}
              width={3840}
              height={2160}
              className={`
               ${
                 idx % 2 === 0 ? `${styles['image-1']}` : `${styles['image-2']}`
               }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
