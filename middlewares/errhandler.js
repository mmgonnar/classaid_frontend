import { NextResponse } from 'next/server';

export async function errorHandlerMiddleware(req) {
  try {
    return await NextResponse.next();
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
