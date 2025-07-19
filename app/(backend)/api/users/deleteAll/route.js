import { deleteAllUsers } from '@/controllers/user/deleteAll';
import connectDB from '@/lib/mongodb';

export async function DELETE() {
  await connectDB();
  return deleteAllUsers();
}
