'use client';

import styles from './Fleet.module.scss';

function Fleet(props) {
  return (
    <div className={`${props.className} ${styles['fleet-container']}`}>
      Fleet
    </div>
  );
}

export default Fleet;
