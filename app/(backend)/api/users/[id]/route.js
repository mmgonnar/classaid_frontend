import connectDB from '@/lib/mongodb';
import { getUserById } from '@/controllers/user/getUserById';

export async function GET(req, { params }) {
  await connectDB();
  const result = await params;
  const id = result.id;

  return getUserById(id);
}
