import { deleteClass } from '@/controllers/class/deleteClass';
import { getClassById } from '@/controllers/class/getClassById';
import { updateClass } from '@/controllers/class/updateClass';
import connectDB from '@/lib/mongodb';

export async function GET(req, { params }) {
  await connectDB();
  const { id } = await params;
  // const result = await params;
  // const id = result.id;

  return getClassById(id);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;
  return deleteClass(id);
}

export async function PATCH(req, { params }) {
  await connectDB();
  const { id } = await params;
  return updateClass(req, id);
}
