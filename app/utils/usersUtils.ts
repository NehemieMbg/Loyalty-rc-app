import { UserRole } from '@/enums/user-enums';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getUsers() {
  try {
    const response = await fetch(`http://localhost:3000/api/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function getUser(userEmail: string) {
  const users = await getUsers();
  const user = users.filter((user) => user.email === userEmail);
  return user[0];
}

export async function isUserAllowed(
  userEmail: string,
  userRole = UserRole.ADMIN
) {
  const user = await getUser(userEmail!);
  return user.role === userRole;
}

// Redirect if user is not allowed to this page section.
export async function allowedAccess(
  session: {
    user: { name: string; email: string; image: string | null };
  } | null,
  userEmail: string
) {
  const user = await getUser(userEmail!);

  if (!session) redirect('http://localhost:3000/login');

  if (session && user.role !== UserRole.ADMIN)
    redirect('http://localhost:3000/');
}
