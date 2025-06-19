import { createClass } from '@/controllers/class/createClass';
import connectDB from '@/lib/mongodb';

export async function POST(req) {
  await connectDB();
  return createClass(req);
}
