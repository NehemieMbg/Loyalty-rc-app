import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';
import { isEmailValid } from '@/app/utils/formUtils';

export async function POST(request: any) {
  const body = await request.json();
  const email = body.email;

  // Checking if the email is valid
  const hasValidEmail = isEmailValid(email);

  if (hasValidEmail.hasError) {
    return new NextResponse(hasValidEmail.message, { status: 400 });
  }

  // Chekcing if the user is already subscribed to the newsletter
  const emailExist = await prisma.newsletter.findUnique({
    where: { email },
  });

  if (!emailExist) {
    await prisma.newsletter.create({
      data: {
        email,
      },
    });
  }

  return new NextResponse(hasValidEmail.message, { status: 200 });
}
