import { NextResponse } from 'next/server';
import { authMiddleware } from './auth';
import { corsMiddleware } from './cors';
import { protectedRoutesMiddleware } from './protectedRoutes';

const middlewares = [corsMiddleware, protectedRoutesMiddleware];

export default async function middleware(req) {
  for (const middleware of middlewares) {
    const result = await middleware(req);
    if (result instanceof NextResponse) {
      console.log('xxxxx');
      //return result;
    } else {
    }
  }
  return NextResponse.next();
}
