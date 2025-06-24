import { createClass } from '@/controllers/class/createClass';
import { getClasses } from '@/controllers/class/getClasses';
import connectDB from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  console.log('route');
  await connectDB();
  // console.log(req.headers);
  // const id = req.headers.get('authorization');

  return getClasses();
}

export async function POST(req) {
  await connectDB();
  return createClass(req);
}
