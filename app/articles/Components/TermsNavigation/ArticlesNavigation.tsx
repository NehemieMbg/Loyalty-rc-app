'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './ArticlesNavigation.module.scss';

export default function TermsNavigation(props: { className: string }) {
  const { className } = props;
  const pathname = usePathname();
  const currentPath = pathname.split('/')[2];

  return (
    <div className={`${className} ${styles['navigation-container']}`}>
      <ul className={styles['navigation-list']}>
        <li>
          <Link
            href={'/articles/terms-of-use'}
            className={currentPath === 'terms-of-use' ? `${styles.active}` : ''}
          >
            Termes et conditions
          </Link>
        </li>
        <li>
          <Link
            href={'/articles/privacy-policy'}
            className={
              currentPath === 'privacy-policy' ? `${styles.active}` : ''
            }
          >
            Politique de confidentialité
          </Link>
        </li>
      </ul>
    </div>
  );
}
