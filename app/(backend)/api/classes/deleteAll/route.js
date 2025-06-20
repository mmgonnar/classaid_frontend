import { deleteAllClasses } from '@/controllers/class/deleteAll';
import connectDB from '@/lib/mongodb';

export async function DELETE(req) {
  connectDB();
  return deleteAllClasses(req);
}
