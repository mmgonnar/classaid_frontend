import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const secret = new TextEncoder().encode(JWT_SECRET);
//const PROTECTED_ROUTES = ['/dashboard', '/api/']; //! Activar al final
// const PROTECTED_ROUTES = process.env.PROTECTED_ROUTES;
// const PUBLIC_ROUTES = process.env.PUBLIC_ROUTES;
const PROTECTED_ROUTES = ['/dashboard'];
const PUBLIC_ROUTES = ['/login', '/signup', '/', '/signin', '/api/users/'];

export async function protectedRoutesMiddleware(req) {
  const path = req.nextUrl.pathname;
  const cookieStore = await cookies();
  const authorizationHeader = cookieStore.get('token');

  const token = authorizationHeader?.value.replace('Bearer ', '');

  const isPublicRoute = PUBLIC_ROUTES.includes(path);
  if (isPublicRoute) {
    if (token) {
      try {
        const { payload } = await jwtVerify(token, secret);
        req.user = payload;
        return NextResponse.next();
      } catch (error) {
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => path.startsWith(route));
  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      req.user = payload;
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }
  }

  return NextResponse.next();
}
