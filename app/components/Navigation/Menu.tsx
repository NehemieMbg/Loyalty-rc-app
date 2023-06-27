'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '@/app/store/navigation-slice';
import {
  openFleetMenu,
  closeFleetMenu,
} from '@/app/store/fleet-navigation-slice';
import {
  openAccountMenu,
  closeAccountMenu,
} from '@/app/store/account-navigation-slice';

import Fleet from './Fleet/Fleet';

import styles from './Menu.module.scss';
import MenusContainer from './MenusContainer/MenusContainer';
import Account from './Account/Account';
import { getCollection } from '@/app/utils/collectionUtils';

function Menu() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(
    (state: {
      navigation: {
        menuIsActive: boolean;
      };
    }) => state.navigation.menuIsActive
  );

  const fleetMenuOpen = useSelector(
    (state: {
      fleetNavigation: {
        fleetMenuActive: boolean;
      };
    }) => state.fleetNavigation.fleetMenuActive
  );

  const accountIsOpen = useSelector(
    (state: {
      accountNavigation: {
        accountMenuActive: boolean;
      };
    }) => state.accountNavigation.accountMenuActive
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [menusContainerOpen, setMenusContainerOpen] = useState(false);
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    (async () => {
      setCollectionList(await getCollection());
    })();
    console.log(collectionList);

    if (menuIsOpen) {
      if (!menuOpen) setMenuOpen(true);

      document.body.style.overflow = 'hidden';

      if (fleetMenuOpen && !accountIsOpen) {
        setAccountMenuOpen(false);
        setFleetOpen(true);
        setMenusContainerOpen(true);
      }

      if (accountIsOpen && !fleetMenuOpen) {
        setFleetOpen(false);
        setAccountMenuOpen(true);
        setMenusContainerOpen(true);
      }

      if (!fleetMenuOpen && !accountIsOpen) setMenusContainerOpen(false);
    }

    if (!menuIsOpen) {
      setMenuOpen(false);
      setFleetOpen(false);
      setAccountMenuOpen(false);
      setMenusContainerOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [menuIsOpen, fleetMenuOpen, accountIsOpen]);

  function openAccountMenuHandler() {
    dispatch(closeFleetMenu());
    dispatch(openAccountMenu());
  }

  function openFleetMenuHandler() {
    dispatch(closeAccountMenu());
    dispatch(openFleetMenu());
  }

  function closeMenuHanlder() {
    dispatch(closeMenu());
    dispatch(closeAccountMenu());
    dispatch(closeFleetMenu());
  }

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
                closeMenuHanlder();
              }}
            >
              <span className={styles['menu-close__icon']}>&times;</span>{' '}
              <span>Fermer</span>
            </button>

            <ul className={styles['menu-list']}>
              <li className={styles['menu-list__link']}>
                <h2
                  className={`${styles['list-quick-link']} ${
                    fleetMenuOpen ? styles.active : ''
                  }`}
                  onClick={() => {
                    openFleetMenuHandler();
                  }}
                >
                  <span className={styles['item-1']}>Nos Véhicules</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </h2>
              </li>

              <li className={styles['menu-list__link']}>
                <Link href={'services'} className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>Service Inclus</span>{' '}
                </Link>
              </li>

              <li className={styles['menu-list__link']}>
                <Link href={'about'} className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>À Propos</span>{' '}
                </Link>
              </li>

              <li className={styles['menu-list__link']}>
                <Link href={'blog'} className={styles['list-quick-link']}>
                  <span className={styles['item-1']}>Le Journal</span>{' '}
                </Link>
              </li>

              <li className={styles['menu-list__link']}>
                <h2
                  className={`${styles['list-quick-link']} ${
                    accountIsOpen ? styles.active : ''
                  }`}
                  onClick={() => {
                    openAccountMenuHandler();
                  }}
                >
                  <span className={styles['item-1']}>Mon Compte</span>{' '}
                  <span className={styles['item-2']}>&rarr;</span>
                </h2>
              </li>
            </ul>
          </div>

          <MenusContainer
            className={`${styles['menus-container']} ${
              menusContainerOpen ? styles['menus-container-active'] : ''
            }`}
            messages={fleetOpen ? 'Nos Véhicules' : 'Mon Compte'}
          >
            {fleetOpen && <Fleet collectionList={collectionList} />}
            {accountMenuOpen && <Account closeMenu={closeMenuHanlder} />}
          </MenusContainer>
        </div>
      </div>
    </>
  );
}

export default Menu;
