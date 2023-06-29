import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import User from '@/app/components/User';
import { signOut } from 'next-auth/react';
import Hero from './components/HomePage/HeroSection/Hero';
import Functionality from './components/HomePage/FunctionalitySection/Functionality';
import { store } from '@/app/store';
import { setCollection } from '@/app/store/collection-slice';
import Collection from './components/Collection/Collection';

export const revalidate = 0;

export default async function Home() {
  const req = await fetch('http://localhost:3000/api/collection');
  const data = await req.json();
  store.dispatch(setCollection(data));
  const carData = store.getState().collection.carCollection;

  return (
    <>
      <Hero />
      <Functionality />
      <Collection carCollection={carData} />
    </>
  );
}
