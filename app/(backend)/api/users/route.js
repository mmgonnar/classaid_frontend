import connectDB from '@/lib/mongodb';
import { createUser } from '@/controllers/user/createUser';
import { getUsers } from '@/controllers/user/getUsers';

export async function GET(req) {
  await connectDB();
  return getUsers(req);
}

export async function POST(req) {
  await connectDB();
  return createUser(req);
}
