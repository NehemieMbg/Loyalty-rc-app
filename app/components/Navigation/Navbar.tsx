'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import User from '@/app/components/UI/User';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { openMenu } from '@/app/store/navigation-slice';
import Logo from '@/public/images/logo.png';
// import Image from 'next/image';

export default function Navbar() {
  const dispatch = useDispatch();
  const session = useSession();

  const pathname = usePathname();
  const showNav = true;
  // const showNav = pathname === '/' || pathname === '/collection/[carId]';

  return (
    <>
      {showNav && (
        <nav className={`${styles.nav} `}>
          <div className={styles['nav-container']}>
            <div
              className={styles['nav-menu-container__menu-btn']}
              onClick={() => dispatch(openMenu())}
            >
              <div
                className={styles['nav-menu-container__menu-btn-hamburger']}
              ></div>
              <p className={styles['menu-text']}>Menu</p>
            </div>

            <Link href={'/'} className={styles['nav-container__logo']}>
              Loyalty RC
            </Link>

            <ul className={styles['list-container']}>
              <li>
                <Link href={'#collection'} className={styles['list-link']}>
                  Nos Véhicules
                </Link>
              </li>

              <li>
                <Link href={'/services'} className={styles['list-link']}>
                  Services Inclus
                </Link>
              </li>

              <li>
                <Link href={'/about'} className={styles['list-link']}>
                  À Propos
                </Link>
              </li>

              {/* <li>
                <Link
                  href={`${
                    session?.status === 'authenticated' ? '/account' : '/login'
                  }`}
                  className={styles['nav-menu-container__user-link']}
                >
                  <User className={styles['nav-menu-container__user-icon']} />
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}
