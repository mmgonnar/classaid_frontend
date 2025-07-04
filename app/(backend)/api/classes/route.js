'use server';
import { createClass } from '@/controllers/class/createClass';
import { getClasses } from '@/controllers/class/getClasses';
import connectDB from '@/lib/mongodb';

// export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  await connectDB();
  return getClasses();
  // return getClasses().then((res) => res.data[0]);
}

export async function POST(req) {
  await connectDB();
  return createClass(req);
}
