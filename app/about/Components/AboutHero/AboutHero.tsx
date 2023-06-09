import React from 'react';
import Image from 'next/image';

import styles from './AboutHero.module.scss';

function AboutHero() {
  return (
    <div className={styles.hero}>
      <video className={styles['bg-video']} autoPlay muted loop>
        <source src={'/videos/about_video.webm'} type="video/mp4" />
        Votre navigateur n'est pas compatible
      </video>

      <div className={styles.text}>
        <div className={styles.subcontainer}>
          <h1 className={styles['heading-title']}>
            Explorez le
            <br />
            Meilleur de la
            <br />
            Location Automobile
          </h1>
          <p className={styles['text-content']}>
            Pour ceux qui aspirent à l'excellence, nous proposons la destination
            de premier choix pour vivre une expérience automobile inoubliable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
