'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import User from '@/app/components/UI/User';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const showNav = pathname !== '/login' && pathname !== '/register';

  return (
    <>
      {showNav && (
        <nav className={`${styles.nav} `}>
          <div className={styles['nav-container']}>
            <Link href={'/'} className={styles['nav-container__logo']}>
              Loyalty RC
            </Link>

            <ul className={styles['nav-container__list']}>
              <li className={styles['nav-container__list-link item-1']}>
                <Link href={'/collection'}>Nos Véhicules</Link>
              </li>
              <li className={styles['nav-container__list-link item-2']}>
                <Link href={'/Services'}>Services Inclus</Link>
              </li>
              <li className={styles['nav-container__list-link item-3']}>
                <Link href={'/about'}>À Propos</Link>
              </li>
              <li className={styles['nav-container__list-link item-4']}>
                <Link href={'/journal'}>Le Journal</Link>
              </li>
            </ul>

            <div className={styles['nav-menu-container']}>
              <Link
                href={'login'}
                className={styles['nav-menu-container__user-link']}
              >
                <User className={styles['nav-menu-container__user-icon']} />
              </Link>
              <div className={styles['nav-menu-container__vl']}></div>

              <div className={styles['nav-menu-container__menu-btn']}>
                <p>Menu</p>
                <div
                  className={styles['nav-menu-container__menu-btn-hamburger']}
                ></div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
