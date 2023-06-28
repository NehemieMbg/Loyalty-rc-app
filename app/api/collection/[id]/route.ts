import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function DELETE(request: Request) {
  const urlParams = request.url.split('/');
  const carId = urlParams[urlParams.length - 1];
  console.log('Car Id: ' + carId);

  try {
    await prisma.collection.delete({ where: { id: carId } });
    return new NextResponse('success', { status: 202 });
  } catch (error) {
    console.error('Error deleting car:', error);
    return new NextResponse('An error occurred while deleting the car', {
      status: 500,
    });
  }
}
