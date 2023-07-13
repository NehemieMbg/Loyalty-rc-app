import styles from './Collection.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CollectionType } from '@/types/CollectionType';

export default function Collection(props: { carCollection: CollectionType[] }) {
  const { carCollection } = props;

  return (
    <div id="collection" className={styles['collection-section']}>
      <div className={styles['collection-container']}>
        <h1 className={styles['heading-title-1']}>Véhicules</h1>

        <ul className={styles['collection-list']}>
          {carCollection.map((car) => (
            <li key={car.id} className={styles['collection-item-container']}>
              <Link
                href={`/collection/${car.id}`}
                className={styles['collection-item']}
              >
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
