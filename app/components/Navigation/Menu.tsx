'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '@/app/store/navigation-slice';
import Fleet from './Fleet/Fleet';

import styles from './Menu.module.scss';

function Menu() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.navigation.menuIsActive);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      setMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
    if (!menuIsOpen) {
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [menuIsOpen]);

  return (
    <>
      <div
        className={`${styles.menu} ${menuOpen ? styles['menu-active'] : ''}`}
      >
        <div className={styles['options-container']}>
          <div className={styles['menu-container']}>
            <button
              className={styles['menu-close']}
              onClick={() => {
                dispatch(closeMenu());
              }}
            >
              <span className={styles['menu-close__icon']}>&times;</span>{' '}
              <span>fermer</span>
            </button>

            <ul className={styles['menu-list']}>
              <li className={styles['menu-list__link']}>
                <h2 className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>Nos Véhicules</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </h2>
              </li>

              <li className={styles['menu-list__link']}>
                <Link href={'services'} className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>Service Inclus</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </Link>
              </li>

              <li className={styles['menu-list__link']}>
                <Link href={'/'} className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>À Propos</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </Link>
              </li>

              <li className={styles['menu-list__link']}>
                <Link href={'/'} className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>Le Journal</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </Link>
              </li>

              <li className={styles['menu-list__link']}>
                <h2 className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>Mon Compte</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </h2>
              </li>
            </ul>
          </div>

          <Fleet className={styles['fleet-container']}>hey</Fleet>
        </div>
      </div>
    </>
  );
}

export default Menu;
