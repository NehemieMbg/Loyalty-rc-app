import React from 'react';

import styles from './PictureGallery.module.scss';
import Image from 'next/image';

export default function PictureGallery(props: {
  image: string;
  carName: string;
}) {
  const { image, carName } = props;
  return (
    <div className={styles.picture}>
      <Image
        src={image}
        alt={carName}
        width={3840}
        height={2160}
        className={styles.image}
      />
    </div>
  );
}
