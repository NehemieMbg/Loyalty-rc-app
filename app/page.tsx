import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import User from '@/app/components/User';
import { signOut } from 'next-auth/react';
import Hero from './components/HomePage/HeroSection/Hero';
import Functionality from './components/HomePage/FunctionalitySection/Functionality';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Hero />
      <Functionality />
      {/* <h1>Home</h1>
        <h1>Server Side Rendered</h1>
        <pre>{JSON.stringify(session)}</pre>
        <h1>Client Side Rendered</h1>
        <User /> */}
    </>
  );
}
