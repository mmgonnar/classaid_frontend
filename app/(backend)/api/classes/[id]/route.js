import { deleteClass } from '@/controllers/class/deleteClass';
import { getClassById } from '@/controllers/class/getClassById';
import { updateClass } from '@/controllers/class/updateClass';
import connectDB from '@/lib/mongodb';

export async function GET({ params }) {
  await connectDB();
  const { id } = await params;

  return getClassById(id);
}

export async function DELETE({ params }) {
  await connectDB();
  const { id } = await params;
  return deleteClass(id);
}

export async function PATCH(req, { params }) {
  await connectDB();
  const { id } = await params;
  return updateClass(req, id);
}
