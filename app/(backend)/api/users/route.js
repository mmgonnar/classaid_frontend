// folder users
// get, put, patch

import { NextResponse } from 'next/server';
import Users from '@/models/user';
import connectDB from '@/lib/mongodb';

export async function GET() {
  connectDB();
  const users = await Users.find();
  return NextResponse.json({ message: users });
}

// export async function POST() {
//   const body = await request.json();
//   const { name } = body;

//   const newUser = { id: Date.now(), name };

//   return new Response(JSON.stringify(newUser), {
//     status: 201,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// export async function POST() {
//   const body = await request.json();
//   try {
//   } catch {}
// }
