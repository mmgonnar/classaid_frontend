import { NextResponse } from 'next/server';
//import { decrypt } from '@/app/lib/session';
import jwt from 'jsonwebtoken';
//import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
const PROTECTED_ROUTES = ['/dashboard', '/api/'];
const PUBLIC_ROUTES = ['/login', '/signup', '/'];

export async function protectedRoutesMiddleware(req) {
  const path = req.nextUrl.pathname;
  const authorizationHeader = req.headers.get('authorization');
  const token = authorizationHeader?.replace('Bearer ', '');

  console.log('Path:', path);
  console.log('Authorization header:', authorizationHeader);
  console.log('Token:', token);

  const isPublicRoute = PUBLIC_ROUTES.includes(path);
  if (isPublicRoute && token) {
    try {
      jwt.verify(token, JWT_SECRET);
      console.log(
        `Authenticated user trying to access public route (${path}). Redirecting to /dashboard.`,
      );
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    } catch (error) {
      console.warn(
        `Invalid or expired token for user trying to access public route (${path}). Allowing access.`,
      );
    }
  }

  const isProtectedRoute = PROTECTED_ROUTES.some((route) => path.startsWith(route));
  //const isPublicRoute = publicRoutes.includes(path);
  if (!isProtectedRoute) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }
  if (!token) {
    console.log(`No token found for protected route: ${path}.`);
    if (path.startsWith('/api/')) {
      return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
    }
    console.log('bbbbbbb');
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    console.log('Token verified successfully:', payload);
    return true;
  } catch (error) {
    console.error('JWT Verification Failed:', error.message);
    if (path.startsWith('/api/')) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
}

// export async function protectedRoutesMiddleware(req) {
//   const { authorization } = req.headers;
//   console.log('algo');
//   if (!authorization) {
//     //! trabajar en la respuesta
//     return NextResponse.json({ message: 'Need Authorization' }, { status: 401 });
//   }

//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path);

//   //const token = (await cookies()).get('token')?.value;
//   const token = authorization.replace('Bearer ', '');

//   const payload = jwt.verify(token, JWT_SECRET);

//   //const session = await decrypt(cookie);

//   if (isProtectedRoute && !token?.userId) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl));
//   }

//   if (isPublicRoute && token?.userId && !req.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
//   }

//   return NextResponse.next();
// }
