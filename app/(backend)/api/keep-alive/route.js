import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectDB();
    await mongoose.connection.db.admin().command({ ping: 1 });
    return Response.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    return Response.json({ status: 'error', message: error.message }, { status: 503 });
  }
}
