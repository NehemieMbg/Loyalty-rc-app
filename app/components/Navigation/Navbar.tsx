'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import User from '@/app/components/UI/User';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { openMenu } from '@/app/store/navigation-slice';

export default function Navbar() {
  const dispatch = useDispatch();
  const session = useSession();

  const pathname = usePathname();
  const showNav =
    pathname !== '/login' && pathname !== '/register' && pathname !== '/admin';

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

            <Link
              href={`${
                session?.status === 'authenticated' ? '/account' : '/login'
              }`}
              className={styles['nav-menu-container__user-link']}
            >
              <User className={styles['nav-menu-container__user-icon']} />
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
