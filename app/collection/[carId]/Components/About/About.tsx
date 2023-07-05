import React from 'react';
import { CollectionType } from '@/types/CollectionType';

import styles from './About.module.scss';

function About(props: { carData: CollectionType }) {
  const { carData } = props;

  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-title']}>À propos de ce véhicule</h1>
      <p>{carData.about}</p>
    </div>
  );
}

export default About;
