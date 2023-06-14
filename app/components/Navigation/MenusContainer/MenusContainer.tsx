// 'use client';

import React from 'react';
import styles from './MenusContainer.module.scss';
import { useDispatch } from 'react-redux';
import { closeFleetMenu } from '@/app/store/fleet-navigation-slice';
import { closeMenu } from '@/app/store/navigation-slice';

function MenusContainer(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={`${props.className} ${styles['menus-container']}`}>
        <div className={styles['menus-options']}>
          <p
            className={styles['menu-close']}
            onClick={() => {
              dispatch(closeMenu());
              dispatch(closeFleetMenu());
            }}
          >
            <span className={styles['menu-close__icon']}>&times;</span>
          </p>
          <p
            className={styles['return-menus']}
            onClick={() => dispatch(closeFleetMenu())}
          >
            <span>&larr;</span> <span>Nos Véhicules</span>
          </p>
        </div>

        {props.children}
      </div>
    </>
  );
}

export default MenusContainer;