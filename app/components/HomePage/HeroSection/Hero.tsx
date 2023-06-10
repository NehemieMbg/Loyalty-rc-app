import React from 'react';
import styles from './Hero.module.scss';
import Image from 'next/image';
import bgImage from '@/public/images/bmw-m4-yellow.jpg';

function Hero() {
  return (
    <>
      <div className={styles['hero-section']}>
        <Image
          src={bgImage}
          height={2160}
          width={3840}
          className={styles['hero-image']}
        />
        <div className={styles['hero-text__container']}>
          <h1 className={`${styles['hero-heading']} ${styles['item-1']}`}>
            Rent Your Dream Sport Car
          </h1>
          <p className={`${styles['hero-text']} ${styles['item-2']}`}>
            We deliver across Lille. Unlimited mileage, additional drivers and
            insurance.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
