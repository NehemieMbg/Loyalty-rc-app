import React from 'react';
import AboutHero from './Components/AboutHero/AboutHero';

import styles from './about.module.scss';
import AboutContent from './Components/AboutContent/AboutContent';

function page() {
  return (
    <div className={styles.about}>
      <AboutHero />
      <AboutContent />
    </div>
  );
}

export default page;
