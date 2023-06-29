import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <>
      <div className={styles['not-found']}>
        <div className={styles['not-found-container']}>
          <h1 className={styles['not-found-code']}>404</h1>

          <div className={styles['not-found__message-container']}>
            <p className={styles['not-found-message']}>Page introuvable</p>
            <Link href="/" className={styles['not-found-link']}>
              Retour à la page d'accueil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
