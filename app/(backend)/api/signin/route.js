import { login } from '@/controllers/login/login';
import connectDB from '@/lib/mongodb';

export async function POST(req) {
  await connectDB();
  return login(req);
}

export async function GET() {
  return new Response('OK', { status: 200 });
}
