import styles from './CollectionAdmin.module.scss';
import Link from 'next/link';
import { getCollection } from '@/app/utils/collectionUtils';
import { CollectionType } from '@/types/CollectionType';

export default async function Page() {
  const collectionList = await getCollection();

  return (
    <div className={styles['collection-admin']}>
      <div className={styles.nav}>
        <h2 className={styles['page-name']}>Collection</h2>
        <div>
          <Link
            href={'/admin/collection/add-car'}
            className={styles['add-car']}
          >
            <span className={styles['add-car-logo']}>+</span>{' '}
            <p>Ajouté un véhicule</p>
          </Link>
        </div>
      </div>
      <div>
        <ul className={styles['car-list-container']}>
          {collectionList.map((car: CollectionType) => (
            <li key={car.id} className={styles['car-list']}>
              <div className={styles['car-list__car-container']}>
                <div className={styles['car-list__subcontainer']}>
                  <img
                    src={car.images[0]}
                    alt={`${car.make} ${car.model}`}
                    className={styles['car-list__image']}
                  />
                  <div className={styles['car-list__text']}>
                    <h2
                      className={styles['car-list__title']}
                    >{`${car.year} ${car.make} ${car.model}`}</h2>
                    <p className={styles['car-list__price']}>
                      Prix de départ: {car.dayPrice}€
                    </p>
                  </div>
                </div>

                <div className={styles['car-list__btns']}>
                  <Link
                    href={`admin/collection/${car.id}`}
                    className={styles['car-list__btn']}
                  >
                    Modifier
                  </Link>
                  <p
                    className={`${styles['car-list__btn']} ${styles['car-list__btn-delete']}`}
                  >
                    Supprimer
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
