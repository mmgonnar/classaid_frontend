import { login } from '@/controllers/login/login';
import connectDB from '@/lib/mongodb';

export async function GET(req) {
  await connectDB();
  return login(req);
}
