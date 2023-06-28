import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  return new NextResponse(JSON.stringify(users), { status: 200 });
}
