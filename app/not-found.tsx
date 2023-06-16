'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.scss';
import Newsletter from './components/Newsletter/Newsletter';

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div className={styles['test']}>
        {/* {router.push('/')} */}
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          View <Link href="/">all posts</Link>
        </p>
        <Newsletter />
      </div>
    </>
  );
}
