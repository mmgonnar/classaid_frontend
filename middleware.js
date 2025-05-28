import { NextResponse } from 'next/server';
//import jwt
//jwt tokn secret

export function middleware(req) {
  console.log(`${new Date().toLocaleString()}, ${req.method}, ${req.url}`);

  //todos los mimddlewares van aqui

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*', '/((?!_next/static|_next/image|favicon.ico).*)'],
};

export function auth(req, res, next) {
  const { authorization } = req.body;
  if (!authorization) {
    return res.status().send({ message: 'Need authorization' });
  }

  const token = authorization.replace();
  try {
    //const jwt
    next();
  } catch {
    return res.status().send({ message: 'Invalid token' });
  }
}
