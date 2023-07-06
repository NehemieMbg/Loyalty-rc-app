import React from 'react';
import styles from './BookForm.module.scss';

function BookForm() {
  const show = false;
  return show && <div className={styles['book-form-container']}>hey</div>;
}

export default BookForm;
