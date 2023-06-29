import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { allowedAccess } from '@/app/utils/usersUtils';

import Navbar from './components/Navbar/Navbar';
import '../../sass/_global.scss';

export default async function AdmindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Allows acces to the admins
  const session: {
    user: { name: string; email: string; image: string | null };
  } | null = await getServerSession(authOptions as any);
  const userEmail: string | undefined = session?.user.email;
  await allowedAccess(session, userEmail!);

  return (
    <>
      <div className="admin">
        <Navbar adminName={session?.user.name} adminEmail={userEmail} />
        <div className="admin-main">{children}</div>
      </div>
    </>
  );
}
