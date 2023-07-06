import React from 'react';
import { redirect } from 'next/navigation';
import styles from './adminPage.module.scss';

async function page() {
  redirect('/admin/collection');

  return <div className={styles.amdin}></div>;
}

export default page;
