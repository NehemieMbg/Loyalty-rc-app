import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request, response: NextResponse) {
  const body = await request.json();
  console.log(body);

  const {
    make,
    model,
    year,
    engine,
    maxPower,
    topSpeed,
    acceleration,
    transmission,
    images,
    about,
    dayPrice,
    weekPrice,
    weekEndPrice,
    monToSunPrice,
    dayKm,
    weekKm,
    weekEndKm,
    monToSunKm,
    driverAge,
    driverExperience,
    deposit,
  } = body;

  await prisma.collection.create({
    data: {
      make,
      model,
      year,
      engine,
      maxPower,
      topSpeed,
      acceleration,
      transmission,
      images,
      about,
      dayPrice,
      weekPrice,
      weekEndPrice,
      monToSunPrice,
      dayKm,
      weekKm,
      weekEndKm,
      monToSunKm,
      driverAge,
      driverExperience,
      deposit,
    },
  });

  return new NextResponse('Voiture ajouté à la collection', { status: 200 });
}
