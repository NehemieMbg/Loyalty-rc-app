import bcrypt from 'bcryptjs';
import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';
import { CreateUserType } from '@/types/CreateUserType';
import { checkInputsFields } from '@/app/utils/formUtils';

export async function POST(request: any) {
  const body = await request.json();
  const { lastname, firstname, email, password, confirmPassword } = body;

  const hasValidInput = checkInputsFields(body);

  // search for email in database
  const emailExist = await prisma.user.findUnique({
    where: { email },
  });

  if (hasValidInput.hasError || emailExist) {
    if (emailExist)
      hasValidInput.messages.emailErrorMsg = 'Cette email déjà utilisé.';

    return new NextResponse(JSON.stringify(hasValidInput.messages), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // return an ashed version of the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const name = `${firstname} ${lastname}`;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  } as { data: CreateUserType });

  return NextResponse.json(user);
}
