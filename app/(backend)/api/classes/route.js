import { createClass } from '@/controllers/class/createClass';
import { getClasses } from '@/controllers/class/getClasses';
import connectDB from '@/lib/mongodb';

export async function GET(req, { params }) {
  await connectDB();

  return getClasses(req);
}

export async function POST(req) {
  await connectDB();
  return createClass(req);
}
