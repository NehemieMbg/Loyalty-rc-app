'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import User from '@/app/components/UI/User';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '@/app/store/navigation-slice';
import Logo from '@/public/images/logo.png';

export default function Navbar() {
  const dispatch = useDispatch();
  const session = useSession();

  const pathname = usePathname();
  const path0 = pathname.split('/');

  let showNav = true;
  if (path0[1] === 'admin') showNav = false;
  if (path0[1] === 'login') showNav = false;
  if (path0[1] === 'register') showNav = false;
  if (path0[1] === 'collection' && path0[2] === 'booking') showNav = false;

  return (
    <>
      {showNav && (
        <nav
          className={`${styles.nav} ${
            path0[1] === 'about' ? `${styles.transparent}` : ''
          }`}
        >
          <div className={styles['nav-container']}>
            <div
              className={`${styles['nav-menu-container__menu-btn']} ${
                path0[1] === 'about' ? `${styles['bg-transparent']}` : ''
              }`}
              onClick={() => dispatch(openMenu())}
            >
              <div
                className={`${
                  styles['nav-menu-container__menu-btn-hamburger']
                } ${
                  path0[1] === 'about' ? `${styles['btn-transparent']}` : ''
                }`}
              ></div>
              <p className={styles['menu-text']}>Menu</p>
            </div>

            <Link
              href={'/'}
              className={`${styles['nav-container__logo']} ${
                path0[1] === 'about' ? `${styles['logo-transparent']}` : ''
              }`}
            >
              Loyalty RC
            </Link>

            <ul className={`${styles['list-container']}`}>
              <li>
                <Link
                  href={'#collection'}
                  className={`${styles['list-link']}
                ${path0[1] === 'about' ? `${styles['link-transparent']}` : ''}`}
                >
                  Nos Véhicules
                </Link>
              </li>

              {/* <li>
                <Link
                  href={'/services'}
                  className={`${styles['list-link']}
                ${path0[1] === 'about' ? `${styles['link-transparent']}` : ''}`}
                >
                  Services Inclus
                </Link>
              </li> */}

              <li onClick={() => dispatch(closeMenu())}>
                <Link
                  href={'/about'}
                  className={`${styles['list-link']}
                ${path0[1] === 'about' ? `${styles['link-transparent']}` : ''}`}
                >
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
