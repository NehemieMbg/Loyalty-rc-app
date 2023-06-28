import React from 'react';
import styles from './adminPage.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { allowedAccess } from '../utils/usersUtils';

async function page() {
  // Check allowed access
  const session: {
    user: { name: string; email: string; image: string | null };
  } | null = await getServerSession(authOptions as any);

  const userEmail: string | undefined = session?.user.email;

  await allowedAccess(session, userEmail!);

  return <div className={styles.amdin}></div>;
}

export default page;
