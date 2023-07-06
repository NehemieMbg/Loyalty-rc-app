'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '@/app/store/navigation-slice';

import styles from './Backdrop.module.scss';

function Backdrop() {
  const dispatch = useDispatch();
  const [backdropOpen, setBackdropOpen] = useState(false);
  const backdropIsActive = useSelector(
    (state) => state.navigation.menuIsActive
  );

  useEffect(() => {
    if (backdropIsActive) setBackdropOpen(true);
    if (!backdropIsActive) setBackdropOpen(false);
  }, [backdropIsActive]);

  function closeBackdrop() {
    if (backdropIsActive) {
      dispatch(closeMenu());
    }
  }

  return (
    <div
      onClick={() => console.log('Backdrom: Clicked')}
      className={`${styles.backdrop} ${
        backdropOpen ? styles['backdrop-active'] : ''
      }`}
    ></div>
  );
}

export default Backdrop;
