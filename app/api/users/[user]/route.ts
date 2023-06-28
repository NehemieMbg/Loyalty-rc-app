import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const body = request;
  console.log('User Body: ', body);
  console.log('Heyyyyyyyyyyyyy');
}
