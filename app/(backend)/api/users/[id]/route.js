import connectDB from '@/lib/mongodb';
import { getUserById } from '@/controllers/user/getUserById';
import { deleteUser } from '@/controllers/user/deleteUser';
import { updateUser } from '@/controllers/user/updateUser';

export async function GET(req, { params }) {
  await connectDB();
  const result = await params;
  const id = result.id;

  return getUserById(id);
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = await params;

  return deleteUser(id);
}

export async function PATCH(req, { params }) {
  await connectDB();
  const { id } = await params;

  return updateUser(id, req);
}
