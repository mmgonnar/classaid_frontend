import { NextResponse } from 'next/server';

export async function corsMiddleware(req) {
  const response = NextResponse.next();
  console.log('lo que sea');

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // response.headers.set('Access-Control-Allow-Credentials', 'true');
  // response.headers.set('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 200, headers: response.headers });
  }
  return response;
}
