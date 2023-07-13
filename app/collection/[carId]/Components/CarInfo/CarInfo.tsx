import styles from './CarInfo.module.scss';
import { CollectionType } from '@/types/CollectionType';

export default function CarInfo(props: { carData: CollectionType }) {
  const { carData } = props;

  return (
    <div className={styles['car-info-container']}>
      <div className={styles['car-info-subcontainer']}></div>

      <div className={styles['car-info-subcontainer']}>
        <div className={` ${styles['car-info']} ${styles['item-1']}`}>
          <h3 className={styles['heading-title-3']}>Year</h3>
          <p>{carData?.year}</p>
        </div>

        <div className={`${styles['car-info']} ${styles['item-2']}`}>
          <h3 className={styles['heading-title-3']}>Engine</h3>
          <p>{carData?.engine}</p>
        </div>

        <div className={`${styles['car-info']} ${styles['item-3']}`}>
          <h3 className={styles['heading-title-3']}>Max power</h3>
          <p>{carData?.maxPower} HP</p>
        </div>

        <div className={`${styles['car-info']} ${styles['item-4']}`}>
          <h3 className={styles['heading-title-3']}>Top speed</h3>
          <p>{carData?.topSpeed} km/h</p>
        </div>

        <div className={`${styles['car-info']} ${styles['item-5']}`}>
          <h3 className={styles['heading-title-3']}>Acceleration</h3>
          <p>{carData?.acceleration} s</p>
        </div>

        <div className={`${styles['car-info']} ${styles['item-6']}`}>
          <h3 className={styles['heading-title-3']}>Transmission</h3>
          <p>{carData?.transmission}</p>
        </div>
      </div>
    </div>
  );
}
