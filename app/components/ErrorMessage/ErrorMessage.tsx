import React from 'react';
import styles from './ErrorMessage.module.scss';
import ExclamationCircle from '../UI/ExclamationCircle';

export default function ErrorMessage(props) {
  return (
    <p className={styles['error-message']}>
      <ExclamationCircle className={styles['exclamation-icon-circle']} />

      {props.message}
    </p>
  );
}
