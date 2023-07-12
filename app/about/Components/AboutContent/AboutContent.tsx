import React from 'react';
import Image from 'next/image';

import styles from './AboutContent.module.scss';

function AboutContent() {
  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles['heading-title']}>Découvrez notre équipe</h1>
          <p>
            Chez Loyalty RC, notre priorité absolue est de vous offrir une
            expérience de location automobile exclusive et inégalée. Notre
            engagement envers un service client d'excellence est au cœur de tout
            ce que nous faisons. Nous nous efforçons constamment de surpasser
            vos attentes, en vous fournissant des véhicules haut de gamme.
          </p>
        </div>

        <div className={styles['profil']}>
          <div className={styles['profil-container']}>
            <Image
              src={'/profile-1.jpg'}
              alt="Mombanga Nehemie"
              width={620}
              height={828}
            />
            <p className={styles.name}>Mombanga Nehemie</p>
            <p className={styles.position}>CEO</p>
          </div>
          <div className={styles['profil-container']}>
            <Image
              src={'/profile-2.jpg'}
              alt="Ahmed Taklit"
              width={620}
              height={828}
            />
            <p className={styles.name}>Taklit Ahmed</p>
            <p className={styles.position}>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
