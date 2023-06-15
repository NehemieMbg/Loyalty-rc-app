// 'use client';

import React from 'react';
import styles from './MenusContainer.module.scss';
import { useDispatch } from 'react-redux';
import { closeFleetMenu } from '@/app/store/fleet-navigation-slice';
import { closeMenu } from '@/app/store/navigation-slice';
import { closeAccountMenu } from '@/app/store/account-navigation-slice';

function MenusContainer(props) {
  const dispatch = useDispatch();

  function closeReturnMenuHandler() {
    dispatch(closeAccountMenu());
    dispatch(closeFleetMenu());
  }

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
            onClick={() => closeReturnMenuHandler()}
          >
            <span>&larr;</span> <span>{props.messages}</span>
          </p>
        </div>

        {props.children}
      </div>
    </>
  );
}

export default MenusContainer;
