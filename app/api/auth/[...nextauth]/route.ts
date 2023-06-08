import NextAuth from 'next-auth';
import prisma from '@/app/lib/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import bcrypt from 'bcryptjs';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // check if user exists
        const user = await prisma.user.findUnique({
          where: { email: email },
        });

        // check if email and password are there
        if (!email || !password) {
          throw new Error('Email and password are required.');
        }

        // if no user was found or user doesnt have hashed password (registered with google or facebook).
        if (!user || !user.hashedPassword) {
          throw new Error('No user found.');
        }

        // check if password matches
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error('Email or password does not match.'); // to avoid user guessing credentials
        }

        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
