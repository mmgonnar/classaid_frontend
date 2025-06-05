import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';
import { getToken } from '@/utils/token';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
const secret = new TextEncoder().encode(JWT_SECRET);
//const PROTECTED_ROUTES = ['/dashboard', '/api/'];
const PROTECTED_ROUTES = ['/dashboard'];
const PUBLIC_ROUTES = ['/login', '/signup', '/', '/signin'];

export async function protectedRoutesMiddleware(req) {
  const path = req.nextUrl.pathname;
  const cookieStore = await cookies();
  const authorizationHeader = cookieStore.get('token');

  console.log(authorizationHeader, 'aaaaa');
  const token = authorizationHeader?.value.replace('Bearer ', '');
  console.log(token, 'bbbbbbb');

  const isPublicRoute = PUBLIC_ROUTES.includes(path);
  if (isPublicRoute) {
    console.log('YYYYYYYYYY');
    if (token) {
      try {
        //jwt.verify(token, JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);
        console.log('Middleware - Valid token on public route, redirecting to dashboard');
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
      } catch (error) {
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => path.startsWith(route));
  if (isProtectedRoute) {
    console.log('ZZZZZZZZ');
    if (!token) {
      console.log(token, 'xxxxxxxx');
      //return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }

    try {
      console.log('VVVVVVVVVVVVVV');
      console.log('token', token);
      console.log('JWT', JWT_SECRET);

      // const payload = jwt.verify(
      //   token,
      //   '$2a$12$y/JYjfs1EFu2rVVCXR/go.wXaNfMmBckcg5VK.2t6hXPgs5aT0bb2',
      // );

      const { payload } = await jwtVerify(token, secret);
      req.user = payload;
      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }
  }

  return NextResponse.next();
}
