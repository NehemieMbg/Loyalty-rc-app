import styles from './Collection.module.scss';
import Image from 'next/image';

export default function Collection(props) {
  const { carCollection } = props;

  return (
    <div className={styles['collection-section']}>
      <div className={styles['collection-container']}>
        <h1 className={styles['heading-title-1']}>Véhicules</h1>

        <ul className={styles['collection-list']}>
          {carCollection.map((car) => (
            <li className={styles['collection-item']}>
              <h1
                className={styles['collection-item__title']}
              >{`${car.make} ${car.model}`}</h1>

              <p className={styles['collection-item__text']}>
                A partir de{' '}
                <span className={styles['collection-item__text-price']}>
                  {car.dayPrice}€
                </span>{' '}
                / jour.
              </p>

              <Image
                src={car.images[0]}
                height={1000}
                width={1000}
                alt={`${car.make} ${car.model}`}
                className={styles['collection-item__image']}
              />

              <button className={styles['collection-item__btn']}>
                Plus d'informations
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
