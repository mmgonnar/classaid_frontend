import { NextResponse } from 'next/server';
import { authMiddleware } from './auth';
import { corsMiddleware } from './cors';
import { protectedRoutesMiddleware } from './protectedRoutes';

export default async function middleware(req) {
  const corsResult = await corsMiddleware(req);
  const request = corsResult instanceof NextResponse ? req : corsResult;

  const protectedResult = await protectedRoutesMiddleware(request);
  if (protectedResult instanceof NextResponse) {
    return protectedResult;
  }

  return NextResponse.next();
}
