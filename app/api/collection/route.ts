import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

// Adds a car to the collection
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

// Gets the collection from the database
export async function GET() {
  try {
    const data = await prisma.collection.findMany();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse('An error occurred', { status: 500 });
  }
}

// Updates the data of a car
export async function PUT(request: Request, response: NextResponse) {
  const body = await request.json();
  console.log(body);

  const {
    carId,
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

  await prisma.collection.update({
    where: {
      id: carId,
    },
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
